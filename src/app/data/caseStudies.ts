export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  heroImage: string;
  overview: string;
  role: string;
  team: string;
  duration: string;
  platform: string;
  challenge: string;
  approach: string[];
  research: {
    title: string;
    description: string;
    findings: string[];
  };
  solution: {
    title: string;
    description: string;
    features: string[];
  };
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  images: string[];
  learnings: string[];
  password: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    subtitle: "Redesigning enterprise financial analytics",
    category: "Enterprise SaaS",
    heroImage: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzcyODk0NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: "Led the redesign of a complex financial analytics platform used by portfolio managers and analysts at Fortune 500 companies. The goal was to reduce cognitive load while presenting dense financial data in an actionable format.",
    role: "Lead Product Designer",
    team: "1 PM, 2 Designers, 4 Engineers, 1 Data Scientist",
    duration: "6 months",
    platform: "Web (Desktop)",
    challenge: "Users were struggling with information overload and couldn't quickly identify critical insights. The legacy interface had poor visual hierarchy and required extensive training. Navigation between different data views was confusing and time-consuming.",
    approach: [
      "Conducted contextual inquiries with 15 portfolio managers to understand their workflows",
      "Created journey maps for 3 primary user personas",
      "Developed a new information architecture based on user mental models",
      "Designed and tested 5 iterations with users through moderated usability sessions",
      "Collaborated with engineering to ensure technical feasibility"
    ],
    research: {
      title: "Discovery Research",
      description: "Through extensive user research, we uncovered key pain points and opportunities.",
      findings: [
        "Users spent 40% of their time searching for specific data points",
        "Critical alerts were frequently missed due to poor visual hierarchy",
        "Users needed to compare multiple data sets simultaneously",
        "Most users relied on exporting data to Excel for analysis",
        "Onboarding new team members took an average of 3 weeks"
      ]
    },
    solution: {
      title: "Design Solution",
      description: "We created a modular dashboard system with intelligent defaults and powerful customization.",
      features: [
        "Customizable widgets with drag-and-drop interface",
        "Smart alerts with contextual information and recommended actions",
        "Side-by-side comparison mode for analyzing multiple portfolios",
        "Saved views and templates for common workflows",
        "Progressive disclosure to reduce cognitive load",
        "In-app guidance and contextual help"
      ]
    },
    impact: [
      {
        metric: "Time to insight",
        value: "65% reduction",
        description: "Users found critical information significantly faster"
      },
      {
        metric: "User satisfaction",
        value: "4.6/5.0",
        description: "Post-launch NPS increased from 32 to 68"
      },
      {
        metric: "Training time",
        value: "75% reduction",
        description: "New users became proficient in under 1 week"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY3JlZW58ZW58MXx8fHwxNzcyODk0NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzI4Njc3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    learnings: [
      "Working with financial data requires deep domain knowledge and close collaboration with subject matter experts",
      "Progressive disclosure is essential when designing for expert users who need access to complex features",
      "Balancing customization with sensible defaults prevents decision paralysis",
      "Early and frequent testing with actual users prevented costly late-stage changes"
    ],
    password: "fintech2026"
  },
  {
    id: "mobile-health",
    title: "Mobile Health Companion",
    subtitle: "Accessible health management for chronic conditions",
    category: "Healthcare",
    heroImage: "https://images.unsplash.com/photo-1661246626039-5429b8f7488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyOTAxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: "Designed a mobile health application to help people with chronic conditions track symptoms, medications, and communicate with healthcare providers. The app needed to be accessible to users aged 50+ with varying levels of digital literacy.",
    role: "Senior Principal Designer",
    team: "1 PM, 3 Designers, 5 Engineers, 2 Clinical Advisors",
    duration: "8 months",
    platform: "iOS & Android",
    challenge: "Users were overwhelmed by existing health apps that required too much manual data entry and provided little actionable guidance. Additionally, we needed to ensure the app met accessibility standards and worked for users with various disabilities.",
    approach: [
      "Partnered with patient advocacy groups to recruit diverse participants",
      "Conducted diary studies with 20 patients over 4 weeks",
      "Ran co-design workshops with patients and healthcare providers",
      "Created an accessibility-first design system",
      "Tested with assistive technologies throughout development",
      "Validated clinical content with medical professionals"
    ],
    research: {
      title: "User Research",
      description: "We engaged directly with patients to understand their daily challenges and needs.",
      findings: [
        "Users forget to log symptoms and medications without reminders",
        "Preparing for doctor visits is stressful and time-consuming",
        "Patients want to understand trends but find graphs confusing",
        "Privacy concerns prevent users from sharing data with family members",
        "Many users have dexterity issues that make small touch targets difficult"
      ]
    },
    solution: {
      title: "Design Solution",
      description: "We created a simple, encouraging app that integrates seamlessly into users' daily routines.",
      features: [
        "Smart reminders that adapt to user behavior patterns",
        "Voice input for hands-free logging",
        "Plain language summaries instead of complex visualizations",
        "One-tap report generation for doctor visits",
        "Granular privacy controls for data sharing",
        "Large touch targets and high contrast modes",
        "Positive reinforcement and achievement system"
      ]
    },
    impact: [
      {
        metric: "Daily engagement",
        value: "78%",
        description: "Users logged data at least once daily"
      },
      {
        metric: "User retention",
        value: "6-month: 71%",
        description: "Significantly higher than industry average"
      },
      {
        metric: "Clinical outcomes",
        value: "32% improvement",
        description: "Better symptom management reported by users"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1661246626039-5429b8f7488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyOTAxMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMHJlc2VhcmNofGVufDF8fHx8MTc3MjkyNTkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    learnings: [
      "Accessibility isn't a feature—it's a fundamental requirement that benefits all users",
      "Working with vulnerable populations requires extra sensitivity and ethical considerations",
      "Behavioral design principles can encourage healthy habits without feeling manipulative",
      "Co-design with end users leads to solutions that truly address their needs"
    ],
    password: "health2026"
  },
  {
    id: "design-system",
    title: "Enterprise Design System",
    subtitle: "Scaling design across a global organization",
    category: "Design Systems",
    heroImage: "https://images.unsplash.com/photo-1542627088-6603b66e5c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MjkyNTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: "Built and launched a comprehensive design system to unify the user experience across 15+ products used by millions of users globally. This included creating component libraries, documentation, governance processes, and adoption strategies.",
    role: "Principal Designer, Design Systems",
    team: "4 Designers, 3 Engineers, 1 Content Designer, Multiple Product Teams",
    duration: "12 months (ongoing)",
    platform: "Web & Mobile",
    challenge: "The company had grown through acquisitions, resulting in inconsistent experiences across products. Each team was creating their own solutions, leading to duplicated effort, slower development, and poor user experience. We needed to balance consistency with flexibility for different product needs.",
    approach: [
      "Audited all existing products to identify patterns and inconsistencies",
      "Established a design systems working group with representatives from each product team",
      "Created a contribution model that allowed teams to propose new components",
      "Developed comprehensive documentation with code examples and usage guidelines",
      "Built a pilot program with 3 product teams to validate the system",
      "Created office hours and workshops for ongoing support and education"
    ],
    research: {
      title: "Internal Research",
      description: "We studied how teams were currently working and what they needed to be successful.",
      findings: [
        "Designers were spending 60% of their time recreating common components",
        "Inconsistent patterns were confusing users across products",
        "Lack of shared vocabulary made cross-team collaboration difficult",
        "Engineering teams wanted more design tokens and less manual translation",
        "Teams feared a design system would limit their creativity and autonomy"
      ]
    },
    solution: {
      title: "Design System",
      description: "We created a flexible, well-documented system that empowers teams while ensuring consistency.",
      features: [
        "50+ components with multiple variants and states",
        "Comprehensive design tokens for colors, typography, spacing, and more",
        "Figma library with auto-layout and variants",
        "React component library with TypeScript support",
        "Interactive documentation with live code examples",
        "Contribution guidelines and governance process",
        "Accessibility built into every component (WCAG AA compliant)",
        "Version management and migration guides"
      ]
    },
    impact: [
      {
        metric: "Design efficiency",
        value: "3x faster",
        description: "Teams ship new features 3 times faster"
      },
      {
        metric: "Code reuse",
        value: "85%",
        description: "85% of UI code now comes from shared components"
      },
      {
        metric: "Adoption",
        value: "12 of 15 products",
        description: "Strong adoption across organization within 6 months"
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1542627088-6603b66e5c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjB0aGlua2luZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc3MjkyNTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      "https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzI4Njc3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    ],
    learnings: [
      "Adoption is about people and culture, not just technology—invest heavily in education and support",
      "Starting with a pilot program builds trust and allows you to learn before scaling",
      "A contribution model creates buy-in and helps the system evolve with the organization",
      "Documentation is as important as the components themselves",
      "Governance processes must balance quality control with speed and autonomy"
    ],
    password: "design2026"
  }
];
