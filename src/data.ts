import { PracticeArea, Pillar, WorkflowStep, TrustCard, StatItem } from './types';

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'societario',
    number: '01',
    title: 'Societário e Governança',
    description:
      'Estruturação e reorganização societária, atos corporativos, acordos entre sócios e mecanismos de governança para decisões mais seguras.',
    iconName: 'Building2',
    subjectKey: 'Societário e Governança',
  },
  {
    id: 'contratos',
    number: '02',
    title: 'Contratos Empresariais',
    description:
      'Elaboração, revisão e negociação de contratos com foco na proteção da operação, equilíbrio de responsabilidades e redução de exposição.',
    iconName: 'FileText',
    subjectKey: 'Contratos Empresariais',
  },
  {
    id: 'compliance',
    number: '03',
    title: 'Compliance e Gestão de Riscos',
    description:
      'Mapeamento preventivo de riscos, revisão de procedimentos internos e construção de práticas de conformidade adequadas à realidade da empresa.',
    iconName: 'ShieldCheck',
    subjectKey: 'Compliance e Gestão de Riscos',
  },
  {
    id: 'trabalhista',
    number: '04',
    title: 'Relações Trabalhistas Empresariais',
    description:
      'Orientação preventiva e estratégica para relações de trabalho, políticas internas, gestão de contingências e tomada de decisão.',
    iconName: 'Users',
    subjectKey: 'Relações Trabalhistas',
  },
  {
    id: 'contencioso',
    number: '05',
    title: 'Contencioso Estratégico',
    description:
      'Condução técnica de disputas relevantes, com análise de impacto, definição de prioridades e estratégia compatível com os interesses do negócio.',
    iconName: 'Scale',
    subjectKey: 'Contencioso Estratégico',
  },
  {
    id: 'dados-digital',
    number: '06',
    title: 'Proteção de Dados e Negócios Digitais',
    description:
      'Adequação de práticas, contratos e operações digitais às exigências de privacidade, segurança da informação e proteção de dados.',
    iconName: 'Lock',
    subjectKey: 'Proteção de Dados',
  },
];

export const PILLARS: Pillar[] = [
  {
    id: 'visao',
    title: 'Visão empresarial',
    description: 'A questão jurídica é analisada dentro da realidade operacional e estratégica do negócio.',
  },
  {
    id: 'prevencao',
    title: 'Prevenção',
    description: 'Riscos são identificados antes de comprometerem contratos, relações ou decisões.',
  },
  {
    id: 'clareza',
    title: 'Clareza',
    description: 'Orientações diretas, compreensíveis e compatíveis com o nível de decisão envolvido.',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Diagnóstico do contexto',
    description: 'Compreensão da estrutura da empresa, dos objetivos estratégicos e dos fatores que envolvem a demanda.',
  },
  {
    step: '02',
    title: 'Mapeamento jurídico e de riscos',
    description: 'Identificação das alternativas legais, impactos operacionais e possíveis pontos de vulnerabilidade.',
  },
  {
    step: '03',
    title: 'Definição da estratégia',
    description: 'Estruturação do caminho jurídico mais eficiente, alinhado à governança e aos interesses da operação.',
  },
  {
    step: '04',
    title: 'Acompanhamento da execução',
    description: 'Orientação contínua para implementação segura dos instrumentos e decisões estabelecidas.',
  },
];

export const STATS: StatItem[] = [
  { value: 6, label: 'frentes jurídicas integradas', prefix: '0' },
  { value: 4, label: 'etapas de análise estratégica', prefix: '0' },
  { value: 3, label: 'pilares de atuação', prefix: '0' },
  { value: 1, label: 'estratégia construída para cada contexto', prefix: '0' },
];

export const TRUST_CARDS: TrustCard[] = [
  {
    id: 'clareza',
    title: 'Clareza executiva',
    description: 'Informações jurídicas organizadas para que riscos, alternativas e consequências possam ser compreendidos com objetividade.',
  },
  {
    id: 'confidencialidade',
    title: 'Confidencialidade',
    description: 'Discrição e responsabilidade no tratamento de informações sensíveis, documentos e decisões estratégicas.',
  },
  {
    id: 'proximidade',
    title: 'Proximidade profissional',
    description: 'Comunicação direta e acompanhamento compatível com a relevância de cada demanda.',
  },
];

export const CONTACT_SUBJECTS = [
  'Societário e Governança',
  'Contratos Empresariais',
  'Compliance e Gestão de Riscos',
  'Relações Trabalhistas',
  'Contencioso Estratégico',
  'Proteção de Dados',
  'Outro assunto',
] as const;

export const CONTACT_INFO = {
  address: 'São Paulo – SP · CEP 04235-200',
  phoneDisplay: '(59) 87238-4629',
  phoneRaw: '+5559872384629',
  whatsappUrl: 'https://wa.me/5559872384629',
  whatsappHeroUrl: 'https://wa.me/5559872384629?text=Ol%C3%A1%2C%20Aurora%20Advocacia%20Empresarial.%20Gostaria%20de%20iniciar%20um%20contato.',
};
