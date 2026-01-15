
import { Probe, InquiryArea, ResearchUpdate } from './types';

export const PROBES: Probe[] = [
  {
    id: 'p1',
    code: 'VXR-001',
    name: 'Vexeroo',
    domain: 'Luxury & Logistics',
    status: 'ACTIVE',
    year: 2023,
    description: 'A premium logistics subsidiary specializing in high-value asset transportation and luxury goods fulfillment. Engineering reliability into last-mile delivery for discerning clientele.',
    hypothesis: 'Premium logistics requires integration of trust protocols with physical infrastructure to reduce friction in high-value transactions.',
    image: 'https://picsum.photos/seed/vexeroo/800/450',
    dataYield: 'High'
  },
  {
    id: 'p2',
    code: 'ATN-002',
    name: 'Anthena',
    domain: 'Project Management & AI',
    status: 'SCALING',
    year: 2024,
    description: 'An AI-assisted freelancing and project management platform. Intelligent workflow orchestration that adapts to team dynamics and optimizes resource allocation in real-time.',
    hypothesis: 'AI-driven project coordination can reduce overhead by 60% while improving delivery predictability in distributed teams.',
    image: 'https://picsum.photos/seed/anthena/800/450',
    dataYield: 'Scaling'
  },
  {
    id: 'p3',
    code: 'WSP-003',
    name: 'Whisperrnote',
    domain: 'Privacy-First Productivity',
    status: 'DEPLOYING',
    year: 2025,
    description: 'A de-Googled productivity suite comprising Whisperrnote (notes), Whisperrkeep (passwords & passkeys), Whisperrflow (tasks & events), and Whisperrconnect (chat & calls). Built for sovereign data ownership.',
    hypothesis: 'Users will migrate to privacy-respecting alternatives when feature parity is achieved without compromising user experience.',
    image: 'https://picsum.photos/seed/whisperr/800/450',
    dataYield: 'Pending'
  }
];

export const INQUIRY_AREAS: InquiryArea[] = [
  {
    id: '01',
    title: 'Privacy & Data Sovereignty',
    domain: 'DOMAIN: DIGITAL AUTONOMY',
    question: 'How do we reclaim ownership of personal data in an era of surveillance capitalism?',
    context: 'We develop infrastructure that enables individuals and organizations to maintain full sovereignty over their digital footprint, from encrypted communications to self-hosted productivity tools.',
    hypothesis: '"As data becomes the primary unit of value, those who control their own data infrastructure will possess asymmetric advantage."',
    statusLabel: 'Active Probe',
    metric: 'Products: 4'
  },
  {
    id: '02',
    title: 'AI-Augmented Coordination',
    domain: 'DOMAIN: INTELLIGENT SYSTEMS',
    question: 'Can AI reduce the coordination overhead that makes organizations inefficient?',
    context: 'Studying how large language models and intelligent agents can serve as middleware between human intent and systemic execution, reducing the friction inherent in collaborative work.',
    hypothesis: '"The next generation of productivity tools will be invisible—ambient AI that anticipates rather than responds."',
    statusLabel: 'Observational',
    metric: 'Deployments: 3'
  }
];

export const RESEARCH_UPDATES: ResearchUpdate[] = [
  {
    date: '2026-01-10',
    subject: 'Whisperrnote Suite Beta Launch',
    domain: 'PRODUCTIVITY',
    status: 'PUBLISHED',
    description: 'Initial public release of the de-Googled productivity suite with end-to-end encryption.'
  },
  {
    date: '2025-11-15',
    subject: 'Anthena AI Orchestration Engine',
    domain: 'AI/ML',
    status: 'PUBLISHED',
    description: 'Deployment of adaptive project management AI trained on distributed team dynamics.'
  }
];
