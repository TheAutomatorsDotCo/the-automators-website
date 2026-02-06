export interface RelatedCaseStudy {
  id: string;
  company: string;
  title: string;
  description: string;
  slug: string;
  gradient: string;
}

export const allCaseStudies: RelatedCaseStudy[] = [
  {
    id: 'platinum-repairs',
    company: 'Platinum Repairs',
    title: 'Saving Hundreds of Hours Weekly',
    description: 'Automated workflows, 87% inquiry reduction, and R12,000 monthly savings.',
    slug: '/case-studies/platinum-repairs',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'device-doctor',
    company: 'Device Doctor',
    title: 'Operations Revolutionized',
    description: 'Automated claim processing, AI chatbots, and 100+ hours saved weekly.',
    slug: '/case-studies/device-doctor',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'in-en-om',
    company: 'IN&OM Suid-Afrika',
    title: 'Complete Digital Ecosystem',
    description: 'Full platform with directory, job portal, marketplace, and 15,000 monthly automations.',
    slug: '/case-studies/in-en-om',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'epic-deals',
    company: 'Epic Deals',
    title: 'Scaling Trust in Tech',
    description: '15,000+ monthly messages handled with 99.9% reliability via AI automation.',
    slug: '/case-studies/epic-deals',
    gradient: 'from-amber-500 to-orange-500',
  },
];

export function getRelatedCaseStudies(currentId: string, count: number = 3): RelatedCaseStudy[] {
  return allCaseStudies.filter((cs) => cs.id !== currentId).slice(0, count);
}
