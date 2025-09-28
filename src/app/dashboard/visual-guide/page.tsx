'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { recognizeImage, type RecognitionState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Sparkles, Upload } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Identifying...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Identify Landmark
        </>
      )}
    </Button>
  );
}

export default function VisualGuidePage() {
  const initialState: RecognitionState = {};
  const [state, dispatch] = useFormState(recognizeImage, initialState);
  const { toast } = useToast();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dataUri, setDataUri] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        setPreviewUrl(url);
        setDataUri(url);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleFormAction = (formData: FormData) => {
      formData.append('photoDataUri', dataUri);
      dispatch(formData);
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="lg:col-span-1">
        <form action={handleFormAction}>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">
                AI Visual Guide
              </CardTitle>
              <CardDescription>
                Upload a photo of a landmark in Jharkhand to learn more about it.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="picture">Landmark Photo</Label>
                <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} className="hidden" />
                <Button type="button" variant="outline" className="w-full" onClick={() => fileInputRef.current?.click()}>
                    <Upload className="mr-2 h-4 w-4" />
                    Choose Image
                </Button>
              </div>
              {previewUrl && (
                <div className="relative aspect-video w-full overflow-hidden rounded-md border">
                  <Image
                    src={previewUrl}
                    alt="Landmark preview"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            </CardContent>
            {previewUrl && 
                <CardFooter>
                    <SubmitButton />
                </CardFooter>
            }
          </Card>
        </form>
      </div>

      <div className="lg:col-span-2">
        <Card className="min-h-full">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">
              Landmark Information
            </CardTitle>
            <CardDescription>
              Details about the identified landmark will appear here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state?.landmark ? (
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-headline text-primary">{state.landmark}</h3>
                <p className="text-foreground/80">{state.description}</p>
              </div>
            ) : (
               <div className="flex h-96 flex-col items-center justify-center rounded-lg border-2 border-dashed">
                <Sparkles className="h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">
                  Upload an image to reveal its story!
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
