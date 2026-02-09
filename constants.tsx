
import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  BookOpen, 
  MapPin, 
  BarChart3, 
  RefreshCw, 
  Target, 
  Zap, 
  LineChart,
  Stethoscope,
  Building2,
  Lock
} from 'lucide-react';
import { ServiceInfo, PainPoint, Differentiator, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: ServiceInfo[] = [
  {
    id: 'eeat',
    title: 'E-E-A-T Framework',
    description: 'Building clinical trust and authority through verified expert content that satisfies regulatory and search engine requirements.',
    icon: 'ShieldCheck',
    benefits: ['Algorithm-proof visibility', 'Trust-based doctor engagement', 'Compliance-first content'],
    outcomes: ['Top-tier search rankings', 'Enhanced brand reputation', 'Increased prescription share']
  },
  {
    id: 'doctor-engagement',
    title: 'Doctor Engagement System',
    description: 'Sophisticated digital touchpoints that respect physicians\' time while delivering high-value medical insights.',
    icon: 'Users',
    benefits: ['Reduced friction in MR-Doctor interactions', 'Peer-to-peer content delivery', 'Automated follow-ups'],
    outcomes: ['Higher HCP retention', 'Deeper brand loyalty', 'Actionable engagement data']
  },
  {
    id: 'cme-intelligence',
    title: 'CME Intelligence',
    description: 'Data-driven Continuing Medical Education systems that track learning progress and professional development needs.',
    icon: 'BookOpen',
    benefits: ['Targeted educational content', 'Interactive learning modules', 'Participation tracking'],
    outcomes: ['Knowledge-gap identification', 'Certified authority status', 'Loyal educational community']
  },
  {
    id: 'mr-tracking',
    title: 'MR Activity Intelligence',
    description: 'Real-time field force visibility combined with performance analytics to optimize MR-Doctor touchpoints.',
    icon: 'MapPin',
    benefits: ['GPS-verified visit logging', 'Route optimization', 'Digital call reporting'],
    outcomes: ['25% increase in MR productivity', 'Better resource allocation', 'Verified field compliance']
  },
  {
    id: 'roi-dashboard',
    title: 'ROI Intelligence Dashboard',
    description: 'Consolidating promotional spend and sales data into a single source of truth for marketing performance.',
    icon: 'BarChart3',
    benefits: ['Real-time spend visualization', 'Prescription correlation', 'Automated reporting'],
    outcomes: ['Data-backed budget allocation', 'Clear visibility on CPA', 'Strategic decision clarity']
  },
  {
    id: 'growth-engine',
    title: 'Closed-Loop Growth Engine',
    description: 'Integrating field sales with digital marketing to create a seamless, self-reinforcing growth cycle.',
    icon: 'RefreshCw',
    benefits: ['Unified sales/marketing funnel', 'Omnichannel orchestration', 'Continuous optimization'],
    outcomes: ['Sustainable revenue growth', 'Reduced churn', 'Maximized LTV of HCP relationships']
  }
];

export const PAIN_POINTS: PainPoint[] = [
  { title: 'Wasted Promotional Spend', description: 'Millions spent on broad marketing with zero visibility on which doctors are actually converting.' },
  { title: 'MR Inefficiency', description: 'Field forces spending more time in traffic than in quality discussions with high-potential HCPs.' },
  { title: 'Compliance Risks', description: 'Digital strategies that lack the necessary pharmaceutical regulatory safeguards and audit trails.' },
  { title: 'Data Fragmentation', description: 'Sales data, MR logs, and marketing metrics stored in silos that never talk to each other.' },
  { title: 'Low HCP Engagement', description: 'Doctors ignoring generic emails and digital ads that offer no clinical or professional value.' },
  { title: 'ROI Uncertainty', description: 'An inability to prove the direct correlation between digital activity and prescription volume.' }
];

export const DIFFERENTIATORS: Differentiator[] = [
  { title: 'Pharmacist-Led Expertise', description: 'Our systems are designed by medical professionals who understand clinical workflows and regulatory constraints.', icon: 'Stethoscope' },
  { title: 'Compliance-First DNA', description: 'Every line of code and every strategy is built to meet Bangladesh DGDA and global pharma guidelines.', icon: 'Lock' },
  { title: 'Revenue-Focused', description: 'We don\'t care about "likes" or "impressions." We focus on prescription share and bottom-line ROI.', icon: 'LineChart' }
];

export const ICON_MAP: Record<string, React.FC<any>> = {
  ShieldCheck,
  Users,
  BookOpen,
  MapPin,
  BarChart3,
  RefreshCw,
  Target,
  Zap,
  LineChart,
  Stethoscope,
  Building2,
  Lock
};
