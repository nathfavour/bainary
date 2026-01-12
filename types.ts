
export interface Probe {
  id: string;
  code: string;
  name: string;
  domain: string;
  status: 'ACTIVE' | 'DEPLOYING' | 'SCALING' | 'CONCLUDED' | 'INTEGRATED' | 'THEORETICAL';
  year: number;
  description: string;
  hypothesis: string;
  image?: string;
  dataYield?: string;
}

export interface InquiryArea {
  id: string;
  title: string;
  domain: string;
  question: string;
  context: string;
  hypothesis: string;
  statusLabel: string;
  metric?: string;
}

export interface ResearchUpdate {
  date: string;
  subject: string;
  domain: string;
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';
  description: string;
}
