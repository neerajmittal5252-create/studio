// src/ai/flows/personalized-itinerary-generation.ts
'use server';
/**
 * @fileOverview Generates personalized travel itineraries based on user preferences.
 *
 * - generatePersonalizedItinerary - A function that generates a personalized travel itinerary.
 * - PersonalizedItineraryInput - The input type for the generatePersonalizedItinerary function.
 * - PersonalizedItineraryOutput - The return type for the generatePersonalizedItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedItineraryInputSchema = z.object({
  interests: z
    .string()
    .describe('The interests of the tourist, e.g., historical sites, nature, adventure.'),
  travelDates: z
    .string()
    .describe('The travel dates for the itinerary, e.g., 2024-07-01 to 2024-07-10.'),
  budget: z.string().describe('The budget for the trip, e.g., $500, INR 30000.'),
  travelStyle: z
    .string()
    .optional()
    .describe(
      'The travel style of the tourist, e.g., backpacking, luxury, family-friendly.'
    ),
  pace: z
    .string()
    .optional()
    .describe(
      'The preferred pace of the itinerary. Options: Relaxed, Moderate, Fast Paced'
    ),
});

export type PersonalizedItineraryInput = z.infer<
  typeof PersonalizedItineraryInputSchema
>;

const PersonalizedItineraryOutputSchema = z.object({
  itinerary: z.string().describe('The generated personalized travel itinerary.'),
});

export type PersonalizedItineraryOutput = z.infer<
  typeof PersonalizedItineraryOutputSchema
>;

export async function generatePersonalizedItinerary(
  input: PersonalizedItineraryInput
): Promise<PersonalizedItineraryOutput> {
  return personalizedItineraryFlow(input);
}

const personalizedItineraryPrompt = ai.definePrompt({
  name: 'personalizedItineraryPrompt',
  input: {schema: PersonalizedItineraryInputSchema},
  output: {schema: PersonalizedItineraryOutputSchema},
  prompt: `You are an expert travel agent specializing in creating personalized travel itineraries for Jharkhand, India. 

  Create a detailed itinerary based on the following information:

  Interests: {{{interests}}}
  Travel Dates: {{{travelDates}}}
  Budget: {{{budget}}}
  Travel Style: {{{travelStyle}}}
  Pace: {{{pace}}}

  The itinerary should include suggested activities, locations, estimated costs, and any relevant travel tips. Ensure it is well-structured and easy to follow.  Provide context for why the activity should appeal to the user.
  Be conversational and friendly.
  `,
});

const personalizedItineraryFlow = ai.defineFlow(
  {
    name: 'personalizedItineraryFlow',
    inputSchema: PersonalizedItineraryInputSchema,
    outputSchema: PersonalizedItineraryOutputSchema,
  },
  async input => {
    const {output} = await personalizedItineraryPrompt(input);
    return output!;
  }
);
