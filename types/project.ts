export interface Screenshot {
  src: string;
  label: string;
}

export interface Overview {
  image: string;
  title: string;
  summary: string;
  purpose: string;
  target: string;
  features: string;
  period: string;
  members: string;
  stack: string;
  role: string;
  link: string;
}

export interface Process {
  architectureImg: string;
  erdImg: string;
  uxImg: string;
  description: string;
}

export interface Implementation {
  features: {
    title: string;
    descriptionSummary: string;
    descriptionFull: string;
    archImage: { src: string; label: string };
    pageImages: { src: string; label: string }[];
  }[];
}

export interface Troubleshooting {
  problem: string;
  cause: string;
  solution: string;
}

export interface ResultReview {
  results: string[];
  reviews: string[];
}

export interface Review {
  content: string;
  regret: string;
  plan: string;
}

export interface ProjectDTO {
  id: number;
  title: string;
  summary: string;
  overview: Overview;
  process: Process;
  implementation: Implementation;
  troubleshooting: Troubleshooting;
  resultreview: ResultReview;
  review: Review;
}
