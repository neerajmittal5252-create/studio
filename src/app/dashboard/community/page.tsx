import Image from 'next/image';
import { Heart, MessageSquare, PlusCircle } from 'lucide-react';
import { communityPosts } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline">
            Community Forum
            </h1>
            <p className="text-muted-foreground">
            Share and discover experiences from fellow travelers.
            </p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Post
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {communityPosts.map((post) => (
            <Card key={post.id}>
              {post.imageUrl && (
                 <CardHeader className="p-0">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={800}
                        height={400}
                        className="w-full h-64 object-cover rounded-t-lg"
                        data-ai-hint={post.imageHint}
                    />
                 </CardHeader>
              )}
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
                <CardTitle className="pt-4 font-headline text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.content}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                    <Heart className="mr-2 h-4 w-4"/>
                    {post.likes}
                </Button>
                 <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4"/>
                    {post.comments}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">#waterfalls</Button>
                    <Button variant="outline" size="sm">#temples</Button>
                    <Button variant="outline" size="sm">#food</Button>
                    <Button variant="outline" size="sm">#sunrise</Button>
                    <Button variant="outline" size="sm">#wildlife</Button>
                    <Button variant="outline" size="sm">#adventure</Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
