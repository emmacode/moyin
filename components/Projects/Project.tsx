import React from "react";
import { forwardRef, Ref } from "react";

// interface ProjectStepProps {
//   title: string;
//   image: string;
// }

// const projectStep: ProjectStepProps[] = [
//   {
//     title: "MusicPort",
//     image: "/images/sample1.png",
//   },
//   {
//     title: "Creatella",
//     image: "/images/sample2.png",
//   },
//   {
//     title: "HendrayFinvest",
//     image: "/images/sample1.png",
//   },
//   {
//     title: "MyPipe",
//     image: "/images/sample2.png",
//   },
//   {
//     title: "Mable",
//     image: "/images/sample1.png",
//   },
// ];

const ProjectCard = () => {
  return (
    // <div className="flex justify-between">
    //   <div>
    //     {projectStep.map((el, index) => (
    //       <h1 key={index}>{el.title}</h1>
    //     ))}
    //   </div>
    //   <div>
    //     <Image
    //       src={projectStep[0].image}
    //       width={300}
    //       height={300}
    //       alt="sample"
    //     />
    //   </div>
    // </div>
    <div className="flex flex-col items-center">
      <h1 className="text-primary text-center text-xl lg:text-3xl">
        I&apos;m cooking for a better experience 😉
      </h1>
      <div className="flex flex-row mt-3">
        <p className="text-3xl mr-5">👷🏿</p>
        <p className="text-3xl mr-5">🚧</p>
        <p className="text-3xl">🏗️</p>
      </div>
    </div>
  );
};

const Project = forwardRef((props: any, ref: Ref<HTMLDivElement>) => {
  return (
    <section className="mt-20 px-5 lg:px-12 lg:mt-24" ref={ref} {...props}>
      <div className="flex items-center justify-end">
        <h3 className="text-primaryAlpha mr-2">Projects</h3>
        <span className="w-32 h-px bg-secondary"></span>
      </div>
      <div className="flex justify-center mt-20">
        <ProjectCard />
      </div>
    </section>
  );
});

Project.displayName = "Project";
export { Project };
