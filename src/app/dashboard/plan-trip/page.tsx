'use client';

import { useActionState, useFormStatus } from 'react';
import { createItinerary, type ItineraryState } from '@/lib/actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Loader2, Send, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Itinerary
        </>
      )}
    </Button>
  );
}

export default function PlanTripPage() {
  const initialState: ItineraryState = {};
  const [state, dispatch] = useActionState(createItinerary, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Create Your Perfect Trip
            </CardTitle>
            <CardDescription>
              Tell us your preferences, and our AI will craft a personalized
              itinerary for you.
            </CardDescription>
          </CardHeader>
          <form action={dispatch}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <Textarea
                  id="interests"
                  name="interests"
                  placeholder="e.g., historical sites, nature, adventure, waterfalls, temples"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelDates">Travel Dates</Label>
                <Input
                  id="travelDates"
                  name="travelDates"
                  placeholder="e.g., July 15th to July 20th"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  name="budget"
                  placeholder="e.g., INR 20,000"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelStyle">Travel Style</Label>
                <Select name="travelStyle" defaultValue="moderate">
                  <SelectTrigger id="travelStyle">
                    <SelectValue placeholder="Select travel style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="backpacking">Backpacking</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="family-friendly">Family-Friendly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pace">Pace</Label>
                <Select name="pace" defaultValue="moderate">
                  <SelectTrigger id="pace">
                    <SelectValue placeholder="Select pace" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relaxed">Relaxed</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="fast-paced">Fast Paced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton />
            </CardFooter>
          </form>
        </Card>
      </div>
      <div className="lg:col-span-2">
        <Card className="min-h-full">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Your AI-Generated Itinerary
            </CardTitle>
            <CardDescription>
              Your personalized travel plan will appear here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state.itinerary ? (
              <div className="prose prose-sm max-w-none dark:prose-invert whitespace-pre-wrap font-body">
                {state.itinerary}
              </div>
            ) : (
              <div className="flex h-96 flex-col items-center justify-center rounded-lg border-2 border-dashed">
                <Send className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">
                  Fill out the form to generate your adventure!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
