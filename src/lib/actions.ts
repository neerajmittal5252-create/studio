'use server';

import { z } from 'zod';
import {
  generatePersonalizedItinerary,
  PersonalizedItineraryInput,
} from '@/ai/flows/personalized-itinerary-generation';
import {
  aiImageRecognition,
  AIImageRecognitionInput,
} from '@/ai/flows/ai-image-recognition';

export type ItineraryState = {
  itinerary?: string;
  error?: string;
};

const ItinerarySchema = z.object({
  interests: z.string().min(3, { message: 'Interests must be at least 3 characters long.' }),
  travelDates: z.string().min(1, { message: 'Please provide travel dates.' }),
  budget: z.string().min(1, { message: 'Please provide a budget.' }),
  travelStyle: z.string().optional(),
  pace: z.string().optional(),
});

export async function createItinerary(
  prevState: ItineraryState,
  formData: FormData
): Promise<ItineraryState> {
  const validatedFields = ItinerarySchema.safeParse({
    interests: formData.get('interests'),
    travelDates: formData.get('travelDates'),
    budget: formData.get('budget'),
    travelStyle: formData.get('travelStyle'),
    pace: formData.get('pace'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generatePersonalizedItinerary(validatedFields.data as PersonalizedItineraryInput);
    return { itinerary: result.itinerary };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to generate itinerary. Please try again.' };
  }
}

export type RecognitionState = {
  landmark?: string;
  description?: string;
  error?: string;
};

const RecognitionSchema = z.object({
  photoDataUri: z.string().min(1, { message: 'Please upload an image.' }),
});

export async function recognizeImage(
  prevState: RecognitionState,
  formData: FormData
): Promise<RecognitionState> {
  const validatedFields = RecognitionSchema.safeParse({
    photoDataUri: formData.get('photoDataUri'),
  });

  if (!validatedFields.success) {
    return {
      error: 'Invalid image data.',
    };
  }
  
  try {
    const result = await aiImageRecognition(validatedFields.data as AIImageRecognitionInput);
    return { landmark: result.landmark, description: result.description };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to recognize landmark. Please try another image.' };
  }
}
