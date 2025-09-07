export interface Screenshot {
  src: string;
  label: string;
}

export interface Overview {
  image: string;           // 카드 대표 이미지
  title: string;
  summary: string;
  purpose: string;
  target: string;
  features: string[];      // 주요 기능 배열로 변경
  period: string;
  members: string;
  stack: string[];         // 기술 스택 배열로 변경
  role: string;
  link: string;
}

export interface Process {
  architectureImg: string;
  erdImg: string;
  uxImg: string;
  description: string;
}

export interface ImplementationFeature {
  title: string;
  descriptionSummary: string;
  descriptionFull: string;
  archImage: { src: string; label: string };
  pageImages: { src: string; label: string }[];
}

export interface Implementation {
  features: ImplementationFeature[];
}

export interface Troubleshooting {
  feature: string;
  problem: string;
  cause: string;
  solution: string;
}

export interface ResultReview {
  results: string[];
  reviews: string[];
}

export type TroubleshootingList = Troubleshooting[];

export interface ProjectDTO {
  id: number;
  title: string;
  summary: string;
  overview: Overview;
  process: Process;
  implementation: Implementation;
  troubleshootingList: TroubleshootingList;
  resultreview: ResultReview;
}