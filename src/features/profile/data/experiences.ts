import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "re-tech-solutions",
    companyName: "Re-Tech Solutions Private Limited",
    companyLogo: "/images/companies/presidio-logo.webp",
    positions: [
      {
        id: "ai-intern",
        title: "AI Intern",
        employmentPeriod: {
          start: "01.2025",
          end: "Present",
        },
        employmentType: "Internship",
        icon: "code",
        description: `
Worked on applied AI concepts and practical implementation of intelligent systems. Developed hands-on experience in machine learning workflows, deep learning models, and building solution-oriented AI modules for real-world scenarios.`,
        skills: [
          "Applied AI",
          "Machine Learning",
          "Deep Learning",
          "Python",
          "PyTorch",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: false,
  },
];
