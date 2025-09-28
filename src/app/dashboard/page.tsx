import Link from 'next/link';
import {
  ArrowRight,
  Camera,
  Coins,
  Send,
  Users,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { communityPosts } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const featureCards = [
  {
    title: 'Plan My Trip',
    description: 'Create a personalized itinerary with AI.',
    href: '/dashboard/plan-trip',
    icon: Send,
  },
  {
    title: 'Visual Guide',
    description: 'Identify landmarks from your photos.',
    href: '/dashboard/visual-guide',
    icon: Camera,
  },
  {
    title: 'Community Forum',
    description: 'Connect with fellow travelers.',
    href: '/dashboard/community',
    icon: Users,
  },
];

export default function DashboardPage() {
  return (
    <div className="grid gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Welcome, Traveler!
        </h1>
        <p className="text-muted-foreground">
          Here&apos;s a quick overview of your adventure.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="flex flex-col justify-between bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins /> Your Jharkhand Coins
            </CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Your reward balance.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">420</div>
            <Button asChild variant="secondary" className="mt-4">
              <Link href="/dashboard/rewards">View Rewards <ArrowRight /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 relative overflow-hidden">
             <Image
                src="https://picsum.photos/seed/patratu-dashboard/800/400"
                alt="Upcoming Trip"
                width={800}
                height={400}
                className="absolute inset-0 h-full w-full object-cover opacity-20"
                data-ai-hint="valley road"
            />
            <div className="relative h-full flex flex-col justify-between">
                <CardHeader>
                    <CardTitle>Upcoming Trip: Ranchi Weekend</CardTitle>
                    <CardDescription>3 Days, 2 Nights</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-semibold">Next stop: Dassam Falls</p>
                    <Button asChild variant="outline" className="mt-4">
                    <Link href="/dashboard/bookings">View Itinerary <ArrowRight /></Link>
                    </Button>
                </CardContent>
            </div>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        {featureCards.map((feature) => (
          <Card key={feature.title} className="hover:border-primary transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{feature.title}</CardTitle>
              <feature.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold">{feature.description}</div>
              <Link href={feature.href} className="text-sm text-muted-foreground mt-2 flex items-center gap-1 hover:text-primary">
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight font-headline">
          Community Highlights
        </h2>
        <p className="text-muted-foreground">
          See what other adventurers are sharing.
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          {communityPosts.slice(0, 3).map((post) => (
            <Card key={post.id} className="flex flex-col">
              <CardHeader>
                 <div className="flex items-center gap-3">
                    <Avatar>
                        <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{post.author.name}</p>
                        <p className="text-xs text-muted-foreground">{post.timestamp}</p>
                    </div>
                </div>
                <CardTitle className="pt-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
