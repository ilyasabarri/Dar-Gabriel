export type Language = 'es' | 'en' | 'fr';

export interface Room {
  id: string;
  name: string;
  shortName?: string;
  subtitle: string;
  description: string;
  image: string;
  size: string;
  capacity: string;
  bed: string;
  view: string;
  priceFrom: number;
  priceMad?: number;
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge: string;
}

export interface Advantage {
  icon: string;
  text: string;
}

