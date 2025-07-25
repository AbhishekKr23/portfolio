import React from 'react'
import Image from "next/image";


import img from "../../public/img.jpg";
import logo from "../../public/logo1.png";

import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";
import { Button } from './ui/moving-border';
import { Cover } from './ui/cover';


function HeroSection() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">

      <div className="max-w-[600px] w-[90%] mx-auto ">
        <Link href="/">
          <Image src={logo} width={150} height={80} className="max-h-[120px] h-full object-contain object-center mb-2 md:mb-8" alt="logo" />
        </Link>

        {/* left side content  */}
        <div className="flex flex-col lg:mt-24">
          <span className="text-[#0df5f1] font-[600]">Hello, I'm</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 lg:pt-4 lg:pb-10 relative z-20 font-bold tracking-tight">
            Abhishek Kumar, <br /> Software <Cover>Developer</Cover>
          </h2>

          <Link href="#contact" className="text-white border-b  border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]">
            Contact Me &rarr;
          </Link>


        </div>

      </div>

      <div className="w-full h-full flex bg-black px-4">
        <Image src={img} width={800} height={1200} className="w-full max-h-[100vh] object-cover object-top" alt="model" />
      </div>


      {/* right side content */}

      <div className="w-[90%] mx-auto  flex flex-col items-center z-3 pt-14 pb-9 lg:pt-8">
        <Link href="#contact" className="max-w-32 w-full h-[35px] flex justify-center items-center  border-1 border-[#525252] mx-auto pb-1 rounded-4xl">Hire me</Link>


        <h2 className=" my-4 md:my-1  bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          About me
        </h2>
        <p className="max-w-xl mx-auto text-md lg:text-sm text-neutral-700 dark:text-neutral-400 text-center lg:text-start">
        Hi! I'm Abhishek Kumar, a passionate software developer with a strong interest in building user-friendly web apps. I enjoy working with technologies like React, Node.js, and MongoDB. I love solving problems, learning new tools, and turning ideas into real projects.

I’ve worked on a few exciting projects where I handled both frontend and backend. I follow clean coding practices and always aim to write code that’s easy to understand and maintain. I'm also comfortable working with teams, sharing ideas, and helping others.

My goal is to grow every day, improve my skills, and create digital solutions that really make a difference.
        </p>

        <div className="mt-30 md:mt-20 w-full flex justify-center">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <a
              href="/Abhishek_Kumar_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex justify-center items-center"
            >
              <span>Download Resume</span>
            </a>
          </Button>
        </div>



      </div>

      <ShootingStars className="-z-1" />
      <StarsBackground className="-z-2" />

    </div>
  )
}

export default HeroSection
