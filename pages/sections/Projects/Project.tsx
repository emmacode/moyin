import React from "react";
import Image from "next/image";

interface ProjectStepProps {
  title: string;
  image: string;
}

const projectStep: ProjectStepProps[] = [
  {
    title: "MusicPort",
    image: "/images/sample1.png",
  },
  {
    title: "Creatella",
    image: "/images/sample2.png",
  },
  {
    title: "HendrayFinvest",
    image: "/images/sample1.png",
  },
  {
    title: "MyPipe",
    image: "/images/sample2.png",
  },
  {
    title: "Mable",
    image: "/images/sample1.png",
  },
];

const ProjectCard = () => {
  return (
    <div className="flex justify-between">
      <div>
        {projectStep.map((el, index) => (
          <h1 key={index}>{el.title}</h1>
        ))}
      </div>
      <div>
        <Image
          src={projectStep[0].image}
          width={300}
          height={300}
          alt="sample"
        />
      </div>
    </div>
  );
};

export const Project = () => {
  return (
    <section className="mt-24 px-12">
      <div className="flex items-center justify-end">
        <h3 className="text-primaryAlpha mr-2">Projects</h3>
        <span className="w-32 h-px bg-secondary"></span>
      </div>
      <div className="mt-20">
        <ProjectCard />
      </div>
    </section>
  );
};
