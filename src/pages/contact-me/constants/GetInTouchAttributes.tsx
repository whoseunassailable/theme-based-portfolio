// GetInTouchAttributes.ts
import type { SvgIconComponent } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export interface GetInTouchItem {
  label: string;
  icon: SvgIconComponent; // ✅ the component type
  href: string;
}

export const GetInTouchAttributes: GetInTouchItem[] = [
  {
    label: "Email",
    icon: MailOutlineIcon,
    href: "mailto:rohan.bhande@exmail.com",
  },
  {
    label: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/rohan-bhande-08091a169/",
  },
  {
    label: "GitHub",
    icon: GitHubIcon,
    href: "https://github.com/whoseunassailable/",
  },
];
