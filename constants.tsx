
import { Probe, InquiryArea, ResearchUpdate } from './types';

export const PROBES: Probe[] = [
  {
    id: 'p1',
    code: 'PRB-092-A',
    name: 'Aethelgard',
    domain: 'Algorithmic Logistics',
    status: 'ACTIVE',
    year: 2021,
    description: 'A decentralized infrastructure layer for algorithmic supply chain resilience. Testing the hypothesis that distributed ledgers can outperform centralized forecasting in high-entropy environments.',
    hypothesis: 'As transaction costs approach zero, the firm as a unit of economic organization becomes obsolete.',
    image: 'https://picsum.photos/seed/aether/800/450',
    dataYield: 'High'
  },
  {
    id: 'p2',
    code: 'PRB-088-C',
    name: 'Ion Core',
    domain: 'Energy Arbitrage',
    status: 'SCALING',
    year: 2022,
    description: 'Developing novel energy storage substrates for autonomous remote sensing arrays. Focusing on chemical stability in extreme temperature variations.',
    hypothesis: 'Resilience is lost, not gained, during standard formalization processes unless redundancy is codified.',
    image: 'https://picsum.photos/seed/ion/800/450',
    dataYield: 'Scaling'
  },
  {
    id: 'p3',
    code: 'PRB-104-X',
    name: 'Synthetix Lab',
    domain: 'Decentralized Trust',
    status: 'DEPLOYING',
    year: 2024,
    description: 'Exploring large language model alignment through synthetic data generation. A direct inquiry into the limits of recursive self-improvement in closed loops.',
    hypothesis: 'Information entropy in human organizations is inevitable without non-biological storage substrates.',
    image: 'https://picsum.photos/seed/syn/800/450',
    dataYield: 'Pending'
  }
];

export const INQUIRY_AREAS: InquiryArea[] = [
  {
    id: '01',
    title: 'Work & Coordination Systems',
    domain: 'DOMAIN: WORK & COORDINATION',
    question: 'How is value created when the firm dissolves?',
    context: 'We analyze decentralized coordination protocols and the replacement of managerial hierarchies with algorithmic incentives, investigating how value persists when traditional corporate structures are absent.',
    hypothesis: '"As transaction costs approach zero, the firm as a unit of economic organization becomes obsolete."',
    statusLabel: 'Active Probe',
    metric: 'Papers: 4'
  },
  {
    id: '02',
    title: 'Informality → Formality',
    domain: 'DOMAIN: INFORMALITY → FORMALITY',
    question: 'When does formalization compromise resilience?',
    context: 'Studying the precise moment ad-hoc systems crystallize into formal institutions. Specifically focused on emerging market financial rails and shadow logistics networks.',
    hypothesis: '"Resilience is lost, not gained, during standard formalization processes unless redundancy is codified."',
    statusLabel: 'Observational',
    metric: 'Field Studies: 12'
  }
];

export const RESEARCH_UPDATES: ResearchUpdate[] = [
  {
    date: '2023-10-12',
    subject: 'Resilient Nodes in Mesh Networks',
    domain: 'INFRASTRUCTURE',
    status: 'PUBLISHED',
    description: 'Analyzing packet loss in high-latency environments under adversarial conditions.'
  },
  {
    date: '2023-09-28',
    subject: 'Economic Entropy',
    domain: 'ECONOMICS',
    status: 'PUBLISHED',
    description: 'A framework for measuring value dissipation in closed loop systems.'
  }
];
