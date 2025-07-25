import { cn } from "@/lib/utils";
import {
  IconBug,
  IconLock,
  IconCloudUpload,
  IconBrandCpp,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandBootstrap,
  IconDatabase,
  IconSql,
  IconBrandGithub,
  IconTerminal2,
  IconBrandTypescript,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";

export function Services() {
  const features = [
    {
      title: "Languages",
      description: "C++, Python",
      icon: <IconTerminal2 />,
    },
    {
      title: "Frontend",
      description: "React.js, Next.js, Bootstrap, Tailwind CSS, Shadcn UI",
      icon: <IconLayoutDashboard />,
    },
    {
      title: "Backend",
      description: "Node.js, Express.js",
      icon: <IconBrandNodejs />,
    },
    {
      title: "Database",
      description: "MongoDB, SQL",
      icon: <IconDatabase />,
    },
    {
      title: "Version Control",
      description: "Git, GitHub",
      icon: <IconBrandGithub />,
    },
    {
      title: "Web Technologies",
      description: "HTML, CSS, JavaScript, TypeScript",
      icon: <IconBrandHtml5 />,
    },
    {
      title: "Testing",
      description: "Postman",
      icon: <IconBug />,
    },
    {
      title: "Deployment",
      description: "Vercel, Render, Netlify",
      icon: <IconCloudUpload />,
    },
  ];

  return (
    <div className="mt-[150px] flex flex-col" id="skills">
      <div className="px-8 flex flex-col justify-center items-center">
        <h2 className="mx-auto text-white text-xl md:text-4xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>My Skills</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] text-center md:text-lg text-neutral-700 dark:text-neutral-400">
          I turn ideas into reality using these technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      {/* Vertical bar aligned properly */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-tr-full rounded-br-full bg-gray-500 group-hover:bg-blue-500 transition-all duration-200 origin-center" />

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
