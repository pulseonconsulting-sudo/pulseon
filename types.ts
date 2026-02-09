
export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  outcomes: string[];
}

export interface PainPoint {
  title: string;
  description: string;
}

export interface Differentiator {
  title: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  path: string;
}
