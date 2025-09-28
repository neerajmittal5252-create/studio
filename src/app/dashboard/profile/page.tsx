import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { LogOut } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          My Profile
        </h1>
        <p className="text-muted-foreground">
          Manage your account and preferences.
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl font-headline">Chandan Kumar</CardTitle>
            <CardDescription>chandan.k@example.com</CardDescription>
            <Button variant="outline" size="sm" className="mt-2">
              Edit Profile
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Choose what you want to be notified about.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <Label htmlFor="reward-notifications">New Rewards</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when new rewards are available.
              </p>
            </div>
            <Switch id="reward-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div>
              <Label htmlFor="update-notifications">Platform Updates</Label>
              <p className="text-sm text-muted-foreground">
                Receive news and updates about Explore Jharkhand.
              </p>
            </div>
            <Switch id="update-notifications" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild variant="destructive" className="w-full sm:w-auto">
            <Link href="/">
              <LogOut className="mr-2 h-4 w-4" />
              Log Out
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
