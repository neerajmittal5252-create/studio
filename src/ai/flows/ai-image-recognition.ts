'use server';

/**
 * @fileOverview Recognizes landmarks from uploaded images.
 *
 * - aiImageRecognition - A function that handles the image recognition process.
 * - AIImageRecognitionInput - The input type for the aiImageRecognition function.
 * - AIImageRecognitionOutput - The return type for the aiImageRecognition function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIImageRecognitionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a landmark, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AIImageRecognitionInput = z.infer<typeof AIImageRecognitionInputSchema>;

const AIImageRecognitionOutputSchema = z.object({
  landmark: z.string().describe('The name of the identified landmark.'),
  description: z.string().describe('A description of the landmark.'),
});
export type AIImageRecognitionOutput = z.infer<typeof AIImageRecognitionOutputSchema>;

export async function aiImageRecognition(input: AIImageRecognitionInput): Promise<AIImageRecognitionOutput> {
  return aiImageRecognitionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiImageRecognitionPrompt',
  input: {schema: AIImageRecognitionInputSchema},
  output: {schema: AIImageRecognitionOutputSchema},
  prompt: `You are an expert tour guide for Jharkhand, India.

You will identify the landmark in the photo, and provide a short description of it.

Photo: {{media url=photoDataUri}}`,
});

const aiImageRecognitionFlow = ai.defineFlow(
  {
    name: 'aiImageRecognitionFlow',
    inputSchema: AIImageRecognitionInputSchema,
    outputSchema: AIImageRecognitionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
