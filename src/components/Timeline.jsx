import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "./ui/cover";

export function TimelineSection() {
  const data = [
    {
      title: "Experience",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] lg:text-[1.8rem] text-[1rem] font-[600]">
              <Cover>Web Developer Intern – The Sparks Foundation</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">Aug 2023 – Sept 2023</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Learned and applied web design skills in a real-world setting. Used HTML, CSS, and JavaScript to create user-friendly interfaces during the GRIP internship.
            </p>
          </div>
        </div>
      ),
    },
    
    {
      title: "Education",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
            <h4 className="text-[#f4f4f4] lg:text-[1.8rem] text-[1rem] font-[600]">
              <Cover>Sister Nivedita University</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">Sept 2022 - July 2024</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Master of Computer Applications
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] lg:text-[1.8rem] text-[1rem] font-[600]">
              <Cover>Karim City College</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">Aug 2018 - Nov 2021</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Bachelor of Computer Applications
            </p>
          </div>

          <div>
            <h4 className="text-[#f4f4f4] lg:text-[1.8rem] text-[1rem] font-[600]">
              <Cover>Sant Nandlal Smriti Vidya Mandir</Cover>
            </h4>
            <span className="text-blue-400 my-[10px]">2017 - 2018</span>
            <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Class 12th
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip" id="timeline">
      <Timeline data={data} />
    </div>
  );
}
