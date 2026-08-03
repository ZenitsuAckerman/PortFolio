import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "clothiq",
    slug: "clothiq",
    image: "/images/projects/smart-tasker.webp",
    title: "ClothIQ — AI-Powered Fashion Marketplace with Fraud Detection",
    period: {
      start: "05.2025",
      end: "07.2025",
    },
    link: "#",
    skills: [
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "OpenCV",
      "Supabase",
      "PostgreSQL",
      "ECC (P-256)",
    ],
    summary:
      "AI-powered fashion marketplace that detects return fraud using computer vision and cryptographic product verification",
    description: `Developed ClothIQ, an AI-powered fashion marketplace engineered to combat return fraud through a sophisticated blend of computer vision and elliptic-curve cryptography. The platform integrates a FastAPI forensic microservice powered by OpenCV that performs SSIM-based image comparison and pixel-level anomaly detection, enabling automated validation of returned products against their original condition. Product authenticity is enforced via ECC (P-256) digital signatures, creating a tamper-proof chain of custody from purchase to return. The system leverages Supabase for authentication, real-time storage, and PostgreSQL-backed data management, while an automated fraud risk scoring engine and OTP-based logistics verification layer ensure end-to-end return security across a scalable microservice architecture.`,
    isExpanded: true,
    intro:
      "An intelligent fashion e-commerce platform that tackles the growing problem of return fraud in online retail by combining AI-driven image forensics with cryptographic product authentication — ensuring every return is legitimate before a refund is processed.",
    uniqueFeatures: [
      "SSIM-based image forensics via OpenCV to detect product tampering and swap fraud on returns",
      "ECC (P-256) digital signatures for tamper-proof product authentication and chain-of-custody tracking",
      "Automated fraud risk scoring engine that flags suspicious returns before human review",
      "OTP-based logistics verification for secure handoff during the return process",
      "Supabase-powered auth, storage, and real-time PostgreSQL database management",
    ],
    techStackDetail: [
      { label: "Frontend", items: "React, TypeScript" },
      { label: "Backend", items: "FastAPI, Python" },
      { label: "Computer Vision", items: "OpenCV, SSIM Image Comparison, Anomaly Detection" },
      { label: "Security", items: "ECC (P-256) Digital Signatures, OTP Verification" },
      { label: "Database & Auth", items: "Supabase, PostgreSQL" },
    ],
  },
  {
    id: "digital-token-system",
    slug: "digital-token-system",
    image: "/images/projects/skil-sync.webp",
    title: "Digital Token Generation System for Queue Management (SIH Hackathon 2025)",
    period: {
      start: "01.2025",
      end: "02.2025",
    },
    link: "#",
    skills: [
      "Queue Management",
      "Real-Time Systems",
      "Virtual Tokens",
      "SIH Hackathon 2025",
    ],
    summary: "Digital token generation application for efficient crowd & time management",
    description: `Designed and developed a digital token generation application to replace physical queues, enabling efficient crowd and time management. The system generates and manages virtual tokens in real time, reducing wait times and improving user experience in high-traffic service environments. Built for SIH Hackathon 2025.`,
    isExpanded: true,
    intro:
      "A digital token generation application designed to replace physical queues and optimize crowd and time management during high-traffic scenarios.",
    uniqueFeatures: [
      "Real-time virtual token generation and management",
      "Reduces physical queue waiting times",
      "Improves user experience in high-traffic service environments",
      "SIH Hackathon 2025 Project",
    ],
    techStackDetail: [
      { label: "Category", items: "Queue & Crowd Management System" },
      { label: "Event", items: "SIH Hackathon 2025" },
    ],
  },
  {
    id: "sec-bus-tracker",
    slug: "sec-bus-tracker",
    image: "/images/projects/academia-sync.webp",
    title: "SEC Bus Tracker - Real-Time Bus Tracking Application",
    period: {
      start: "01.2024",
      end: "06.2024",
    },
    link: "#",
    skills: ["Flutter", "Firebase", "GPS Tracking", "Real-Time Sync", "Mobile App"],
    summary: "Platform-independent real-time college bus tracking mobile app",
    description: `Built a platform-independent mobile application using Flutter and Firebase to provide live tracking of college buses. Implemented GPS-based real-time location updates, cloud-based data synchronization, and scalable backend services for seamless cross-platform support.`,
    isExpanded: true,
    intro:
      "A platform-independent mobile app built using Flutter and Firebase to provide live tracking of college buses with GPS updates.",
    uniqueFeatures: [
      "GPS-based real-time location updates",
      "Cloud-based data synchronization",
      "Scalable backend services for seamless cross-platform support",
      "Built with Flutter & Firebase",
    ],
    techStackDetail: [
      { label: "Mobile Framework", items: "Flutter" },
      { label: "Backend & Database", items: "Firebase" },
      { label: "Key Features", items: "GPS Live Tracking, Real-Time Cloud Sync" },
    ],
  },
  {
    id: "movie-recommendation-system",
    slug: "movie-recommendation-system",
    image: "/images/projects/data-analyst.webp",
    title: "Movie Recommendation System using Machine Learning",
    period: {
      start: "08.2024",
      end: "10.2024",
    },
    link: "#",
    skills: [
      "Python",
      "Machine Learning",
      "Content-Based Filtering",
      "Scikit-Learn",
      "Similarity Metrics",
    ],
    summary: "ML-based recommendation model utilizing content-based filtering",
    description: `Developed a machine learning-based recommendation model to suggest movies based on user preferences and similarity metrics. Implemented content-based filtering techniques and evaluated performance using standard recommendation accuracy measures.`,
    isExpanded: false,
    intro:
      "A Machine Learning recommendation system providing personalized movie suggestions via content-based filtering techniques.",
    uniqueFeatures: [
      "Content-based filtering model implementation",
      "Similarity metrics for candidate ranking",
      "Performance evaluation using accuracy measures",
    ],
    techStackDetail: [
      { label: "Language", items: "Python" },
      { label: "ML Techniques", items: "Content-Based Filtering, Similarity Metrics" },
    ],
  },
  {
    id: "ai-medical-chatbot",
    slug: "ai-medical-chatbot",
    image: "/images/projects/aura-health.webp",
    title: "AI-Powered Medical Chatbot",
    period: {
      start: "11.2024",
      end: "12.2024",
    },
    link: "#",
    skills: [
      "Python",
      "NLP",
      "AI Chatbot",
      "Conversational Flow",
      "Machine Learning",
    ],
    summary: "AI-driven medical chatbot for health-related queries & guidance",
    description: `Designed and implemented an AI-driven medical chatbot capable of answering basic health-related queries and providing preliminary guidance. Utilized natural language processing techniques to improve response relevance and conversational flow.`,
    isExpanded: false,
    intro:
      "An AI chatbot utilizing natural language processing to assist users with health queries and preliminary medical guidance.",
    uniqueFeatures: [
      "Natural Language Processing (NLP) techniques for conversational relevance",
      "Preliminary health-related query handling and guidance",
      "Interactive conversational flow",
    ],
    techStackDetail: [
      { label: "Language", items: "Python" },
      { label: "AI/NLP", items: "Natural Language Processing, Text Processing" },
    ],
  },
];

/** Look up a project by its URL slug. */
export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
