export type Attraction = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type CommunityPost = {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  timestamp: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  imageUrl?: string;
  imageHint?: string;
};

export type Reward = {
  id: string;
  title: string;
  description: string;
  cost: number;
  icon: React.ElementType;
};

export type BookingService = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
};
