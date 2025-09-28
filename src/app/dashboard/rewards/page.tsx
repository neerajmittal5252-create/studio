import { Coins } from 'lucide-react';
import { rewards } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function RewardsPage() {
  const userCoins = 420;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Jharkhand Coin Rewards
        </h1>
        <p className="text-muted-foreground">
          Redeem your coins for exclusive discounts and offers.
        </p>
      </div>

      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Your Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Coins className="h-12 w-12" />
            <span className="text-5xl font-bold">{userCoins}</span>
            <span className="text-xl">Coins</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rewards.map((reward) => (
          <Card key={reward.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-headline">{reward.title}</CardTitle>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <reward.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardDescription>{reward.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1" />
            <CardFooter>
              <Button className="w-full" disabled={userCoins < reward.cost}>
                Redeem for {reward.cost} Coins
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
