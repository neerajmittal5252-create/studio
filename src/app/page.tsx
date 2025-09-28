import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Camera,
  MapPin,
  Send,
  Sparkles,
  Users,
} from 'lucide-react';

import { attractions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AppLogo } from '@/components/icons';
import { PublicHeader } from '@/components/layout/public-header';
import { PublicFooter } from '@/components/layout/public-footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
          <Image
            src="https://picsum.photos/seed/jharkhand-hero/1920/1080"
            alt="Beautiful landscape of Jharkhand"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
            data-ai-hint="landscape nature"
          />
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center text-primary-foreground">
              <div className="mb-6 flex justify-center">
                <AppLogo className="h-16 w-16" />
              </div>
              <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Explore Jharkhand
              </h1>
              <p className="mt-6 text-lg leading-8">
                Discover the hidden gems of Jharkhand, from majestic waterfalls
                to ancient temples. Your adventure starts here.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild size="lg">
                  <Link href="/dashboard">
                    Get Started <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="link" size="lg" className="text-primary-foreground">
                  <Link href="#features">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="attractions" className="py-16 sm:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Top Attractions
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore the breathtaking beauty and cultural heritage of
                Jharkhand.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {attractions.map((attraction) => (
                <Card
                  key={attraction.id}
                  className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <CardHeader className="p-0">
                    <Image
                      src={attraction.imageUrl}
                      alt={attraction.name}
                      width={600}
                      height={400}
                      className="h-56 w-full object-cover"
                      data-ai-hint={attraction.imageHint}
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="font-headline flex items-center gap-2">
                      <MapPin className="text-primary" /> {attraction.name}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {attraction.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="bg-secondary/50 py-16 sm:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                AI-Powered Travel Assistant
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let our smart tools guide your journey and create unforgettable
                experiences.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Camera />
                  </div>
                  <CardTitle className="font-headline mt-4">
                    AI Visual Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Upload a photo of a landmark and get instant information
                    about its history and significance.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Send />
                  </div>
                  <CardTitle className="font-headline mt-4">
                    Personalized Itineraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Tell us your interests, and our AI will craft a custom
                    travel plan just for you.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Users />
                  </div>
                  <CardTitle className="font-headline mt-4">
                    Community Forum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Connect with other travelers, share your experiences, and
                    get insider tips.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
