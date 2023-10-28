import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Drawer } from "@/components/Drawer/Drawer";
import { CancelIcon } from "@/components/icons/CancelIcon";

import styles from "./Introduction.module.css";

const technologies = [
  "Javascript(ES6+)",
  "Typescript",
  "NodeJS",
  "Python(Inview)",
  "ReactJS",
  "Redux",
  "React-Query",
  "NextJS",
  "Sass",
  "GraphQL",
  "CSS-in-JS",
  "TailwindCSS",
];

const tools = ["Docker", "Git", "Linux", "Cypress", "Playwright"];

interface IProps {
  open: boolean;
  onClose: () => void;
}

export const About: React.FC<IProps> = ({ open, onClose }) => {
  const renderHead = () => {
    return (
      <div className="mb-10">
        <CancelIcon
          className="cursor-pointer"
          onClose={onClose}
          color="#e6f1ff"
        />
      </div>
    );
  };

  const renderBody = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="mr-10 border border-secondary pb-4">
          <Image
            width={200}
            height={200}
            src="/images/me.jpg"
            alt="Moyin's Photo"
            className="bg-blackAlpha45 mt-[-20px] ml-[-20px]"
          />
        </div>
        <div className="mt-5">
          <p className="font-sf text-primary">
            Hello! I&apos;m Moyinoluwa, a Software Engineer. My intriguing
            journey into web development began in 2016, motivated by a quest for
            free food at a Django girls meetup - a hungry coder&apos;s origin
            story 🍔. <br />
            <br />
            Since then, I&apos;ve navigated diverse realms, interning and
            working at a{" "}
            <Link
              href="https://www.elta.com.ng/"
              target="_blank"
              className="text-secondary"
            >
              digital agency
            </Link>
            ,
            <Link
              href="https://www.communely.co/"
              target="_blank"
              className="text-secondary"
            >
              {" "}
              a nimble startup
            </Link>
            , an{" "}
            <Link
              href="https://www.hendrayfinvest.com"
              target="_blank"
              className="text-secondary"
            >
              ed-fintech venture
            </Link>
            , and a{" "}
            <Link
              href="https://www.gowagr.app/"
              target="_blank"
              className="text-secondary"
            >
              financial services firm
            </Link>
            . With every step, I&apos;ve honed my craft and broadened my
            horizons.
            <br />
            <br />
            As I evolve in my software engineering odyssey, my passion lies in
            crafting seamless user experiences and tackling tangible real-world
            challenges, prioritizing action over mere promises of &quot;making
            the world a better place.&quot; ¯\_(ツ)_/¯
          </p>
          <div className="mt-5">
            <div className="mr-7">
              <h4 className="text-secondary mb-2">Technologies</h4>
              <div className="flex justify-between">
                <ol>
                  {technologies.slice(0, 4).map((tech, index) => {
                    return (
                      <li
                        key={index}
                        className={`${styles.skill} text-primary text-xs mb-2 last:mb-0`}
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ol>
                <ol>
                  {technologies.slice(4, 8).map((tech, index) => {
                    return (
                      <li
                        key={index}
                        className={`${styles.skill} text-primary text-xs mb-2 last:mb-0`}
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ol>
                <ol>
                  {technologies.slice(-4).map((tech, index) => {
                    return (
                      <li
                        key={index}
                        className={`${styles.skill} text-primary text-xs mb-2 last:mb-0`}
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-secondary mb-2">Tools</h4>
              <div>
                <ul>
                  {tools.slice(0, 4).map((tool, index) => {
                    return (
                      <li
                        key={index}
                        className={`${styles.skill} text-primary text-xs mr-3 last:mr-0 inline`}
                      >
                        {tool}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Drawer open={open} onClose={onClose}>
      <div className="p-4 mt-5">
        {renderHead()}
        {renderBody()}
      </div>
    </Drawer>
  );
};
