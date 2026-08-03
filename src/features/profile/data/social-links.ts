import { RiGithubLine, RiLinkedinBoxLine, RiMailLine } from "react-icons/ri";

import type { SocialLink } from "../types/social-links";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: RiLinkedinBoxLine,
    title: "LinkedIn",
    description: "rahuls1619",
    href: "https://www.linkedin.com/in/rahuls1619/",
  },
  {
    icon: RiGithubLine,
    title: "GitHub",
    description: "rahulrio1619",
    href: "https://github.com/rahulrio1619",
  },
  {
    icon: RiMailLine,
    title: "Email",
    description: "riorahul2006@gmail.com",
    href: "mailto:riorahul2006@gmail.com",
  },
];
