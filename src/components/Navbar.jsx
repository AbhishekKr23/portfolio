import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconCertificate,
  IconMail,
  IconFolder,
  IconRoute,
} from "@tabler/icons-react";
import { Code2Icon } from "lucide-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      titleAttr: "Home"
    },

    {
      title: "Skills",
      icon: (
        <Code2Icon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
      titleAttr: "Skills"
    },
    {
      title: "Projects",
      icon: (
        <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
      titleAttr: "Projects"
    },
    {
      title: "Timeline",
      icon: (
        <IconRoute className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#timeline",
      titleAttr: "Timeline"
    },
    {
      title: "Achievements/Certifications",
      icon: (
        <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#achievements",
      titleAttr: "Achievements/Certifications"
    },

    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
      titleAttr: "Contact"
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/AbhishekKr23",
      titleAttr: "GitHub"
    },
  ];
  return (
    <div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock
        // only for demo, remove for production
        
        items={links}
      />
    </div>
  );
}
