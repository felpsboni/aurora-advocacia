export interface PracticeArea {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  subjectKey: string;
}

export interface Pillar {
  id: string;
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface TrustCard {
  id: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  autorizacao: boolean;
}
