
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Case {
  id: string;
  client: string;
  results: string[];
  imageUrl: string;
  niche: string;
}

export interface FunnelStep {
  number: string;
  title: string;
  details: string;
}
