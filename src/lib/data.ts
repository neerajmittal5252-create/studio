import type { Attraction, CommunityPost, Reward, BookingService } from './definitions';
import { PlaceHolderImages } from './placeholder-images';
import { Hotel, Plane, Train, Car, Percent, Utensils, Gift } from 'lucide-react';

export const attractions: Attraction[] = PlaceHolderImages.map(img => ({
  id: img.id,
  name: img.id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
  description: img.description,
  imageUrl: img.imageUrl,
  imageHint: img.imageHint,
}));

export const communityPosts: CommunityPost[] = [
  {
    id: '1',
    author: {
      name: 'Priya Sharma',
      avatarUrl: 'https://picsum.photos/seed/priya/40/40',
    },
    timestamp: '2 days ago',
    title: 'My amazing trip to Netarhat!',
    content: 'The sunrise at Netarhat was absolutely mesmerizing. I highly recommend visiting Magnolia Point. The journey through the winding roads of the valley was an adventure in itself. Can\'t wait to go back!',
    likes: 125,
    comments: 12,
    imageUrl: 'https://picsum.photos/seed/netarhat-post/800/600',
    imageHint: 'sunrise mountains',
  },
  {
    id: '2',
    author: {
      name: 'Raj Verma',
      avatarUrl: 'https://picsum.photos/seed/raj/40/40',
    },
    timestamp: '5 days ago',
    title: 'Spotting a tiger at Betla National Park',
    content: 'Incredible experience at Betla! We were lucky enough to spot a tiger during our safari. The park is vast and full of diverse wildlife. A must-visit for nature lovers.',
    likes: 230,
    comments: 25,
  },
  {
    id: '3',
    author: {
      name: 'Anjali Mehta',
      avatarUrl: 'https://picsum.photos/seed/anjali/40/40',
    },
    timestamp: '1 week ago',
    title: 'The powerful aura of Deori Mandir',
    content: 'Deori Mandir has such a serene and powerful atmosphere. The unique 16-armed idol of Goddess Durga is a sight to behold. Felt a deep sense of peace here.',
    likes: 98,
    comments: 8,
    imageUrl: 'https://picsum.photos/seed/deori-post/800/600',
    imageHint: 'temple spiritual',
  },
];

export const rewards: Reward[] = [
    {
        id: '1',
        title: '5% off on Hotel Bookings',
        description: 'Get a 5% discount on your next hotel booking through our platform.',
        cost: 50,
        icon: Percent,
    },
    {
        id: '2',
        title: 'Free Meal at Partner Restaurant',
        description: 'Enjoy a complimentary meal at a participating restaurant in Ranchi.',
        cost: 100,
        icon: Utensils,
    },
    {
        id: '3',
        title: 'Souvenir Gift Voucher',
        description: 'Redeem a gift voucher for local handicrafts at a partner store.',
        cost: 150,
        icon: Gift,
    },
     {
        id: '4',
        title: '10% off on Tour Packages',
        description: 'Get a 10% discount on any guided tour package booked via Explore Jharkhand.',
        cost: 200,
        icon: Percent,
    },
];

export const bookingServices: BookingService[] = [
    {
        id: 'hotels',
        name: 'Hotels',
        description: 'Find the best places to stay, from luxury resorts to budget-friendly guesthouses.',
        icon: Hotel,
    },
    {
        id: 'flights',
        name: 'Flights',
        description: 'Book your flights to and from Jharkhand with ease and get the best deals.',
        icon: Plane,
    },
    {
        id: 'trains',
        name: 'Trains',
        description: 'Travel across the state and beyond by booking your train tickets here.',
        icon: Train,
    },
    {
        id: 'cabs',
        name: 'Cabs & Taxis',
        description: 'Rent a car or book a taxi for convenient local and outstation travel.',
        icon: Car,
    }
]
