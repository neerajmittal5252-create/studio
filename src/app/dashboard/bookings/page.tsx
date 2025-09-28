import { bookingServices } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function BookingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Travel Bookings
        </h1>
        <p className="text-muted-foreground">
          Plan and book every part of your trip in one place.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {bookingServices.map((service) => (
          <Card key={service.id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <service.icon className="h-6 w-6 text-primary" />
                <span className='font-headline'>{service.name}</span>
              </CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button>
                Book {service.name} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
