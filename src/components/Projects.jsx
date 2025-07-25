"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// 🔗 ProjectLinks button component
const ProjectLinks = ({ github, live }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-4 justify-center">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300 shadow-lg"
      >
        <FaGithub />
        GitHub Repo
      </a>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-lg"
      >
        <FaExternalLinkAlt />
        Live Demo
      </a>
    </div>
  );
};

// 🧠 Project Section
export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={`card-${index}`} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

// 📦 Project Data
const data = [
  {
    category: "Full Stack",
    title: "CrimeWatch App",
    thumbnail: (
      <img
        src="/crimewatch.png"
        alt="CrimeWatch App"
        className="w-full h-full object-cover rounded-md overflow-hidden"
      />
    ),
    github: "https://github.com/AbhishekKr23/CrimeWatch",
    // live: "https://crimewatch.vercel.app",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Report crimes easily, anytime, anywhere.
          </span>{" "}
          CrimeWatch helps people report crimes without showing their name. It uses AI
          to help write reports better and faster. The design works great on mobile, so
          you can use it on the go. It also has login for different users — like admin
          and normal users.
        </p>
        <p><strong>Tech Stack:</strong> Next.js, Prisma, NeonDB, Tailwind CSS, Clerk Auth</p>

        <img
          src="/crimewatchhome.png"
          alt="CrimeWatch App"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/AbhishekKr23/CrimeWatch"
          // live="https://crimewatch.vercel.app"
        />
      </div>
    ),
  },
  {
    category: "Full Stack",
    title: "DevSpace - Social Media App",
    src: "/devspace.png",
    github: "https://github.com/AbhishekKr23/DevSpace",
    live: "https://devspace-tp01.onrender.com/",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Connect, chat, and share in real time.
          </span>{" "}
          DevSpace is a social media app where users can chat live using
          Socket.io. Built with Node.js, MongoDB, and EJS, it has a clean MVC
          structure and uses Passport.js for login. Bootstrap keeps the UI clean,
          while secure sessions and optimized schemas make it fast and safe to
          use.
        </p>
        <p><strong>Tech Stack:</strong> Node.js, Express, MongoDB, Socket.io, EJS, Bootstrap, Passport.js</p>

        <img
          src="/devspacepage.png"
          alt="DevSpace App"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/AbhishekKr23/DevSpace"
          live="https://devspace-tp01.onrender.com/"
        />
      </div>
    ),
  },
  {
    category: "Frontend",
    title: "Cryptocurrency Tracker",
    src: "/crypto.png",
    github: "https://github.com/AbhishekKr23/CryptoCurrencytracker",
    live: "https://abhishekkr23.github.io/CryptoCurrencytracker/",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Stay updated with live crypto prices.
          </span>{" "}
          This responsive web app tracks real-time cryptocurrency prices using the
          Binance WebSocket API. It handles auto reconnects on network drops and
          is built using plain HTML5, CSS3, and JavaScript.
        </p>
        <p><strong>Tech Stack:</strong> HTML5, CSS3, JavaScript, Bootstrap 5, Binance WebSocket API</p>

        <img
          src="/cryptohome.png"
          alt="Cryptocurrency Tracker"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/AbhishekKr23/CryptoCurrencytracker"
          live="https://abhishekkr23.github.io/CryptoCurrencytracker/"
        />
      </div>
    ),
  },
  {
    category: "Full Stack",
    title: "AI Image Studio",
    src: "/aiimagestudio.png", // save and use this as the image path
    github: "https://github.com/AbhishekKr23/AI-Studio-App",
    live: "https://ai-studio-app-teal.vercel.app/",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">Transform your images with AI.</span>{" "}
          AI Image Studio lets users upload images and apply smart transformations
          like background removal, enhancement, cropping, etc. It gives a live preview
          and download option.
        </p>
        <p>
          <strong>Tech Stack:</strong> Next.js 14, Tailwind CSS, ImageKit, Lucide, NextUI, TypeScript, Vercel
        </p>
  
        <img
          src="/aiimagestudio.png"
          alt="AI Image Studio"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
  
        <ProjectLinks
          github="https://github.com/AbhishekKr23/AI-Studio-App"
          live="https://ai-studio-app-teal.vercel.app/"
        />
      </div>
    ),
  },
  {
    category: "Full Stack",
    title: "BiteClub - Food Delivery Website",
    src: "/biteclub.png",
    github: "https://github.com/AbhishekKr23/BiteClub",
    live: "https://biteclub.onrender.com/",
    content: (
      <div className="space-y-4 text-neutral-700 dark:text-neutral-200">
        <p>
          <span className="font-bold">
            Order food fast with BiteClub!
          </span>{" "}
          BiteClub is a full-stack food delivery platform where users can browse meals,
          place secure orders, and view their order history.
        </p>
        <p><strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Stripe API, Tailwind CSS</p>

        <img
          src="/food.png"
          alt="BiteClub - Food Delivery Website"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />

        <ProjectLinks
          github="https://github.com/AbhishekKr23/BiteClub"
          live="https://biteclub.onrender.com/"
        />
      </div>
    ),
  }
];

