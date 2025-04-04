export interface Comment {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  likes: number;
}

export interface Widget {
  id: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
  description: string;
  comments: Comment[];
}
