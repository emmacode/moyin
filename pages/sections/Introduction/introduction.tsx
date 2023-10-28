import { useState } from "react";

import { ArrowDownIcon } from "@/components/icons/ArrowDownIcon";

import { About } from "./About";
import styles from "./Introduction.module.css";

interface IProps {
  handleProjectScroll: () => void;
}

export const Introduction: React.FC<IProps> = ({ handleProjectScroll }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const renderAbout = () => {
    return (
      <div>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className={`${styles.aboutMe} bg-transparent outline-none py-3 px-5`}
        >
          <span></span>
          <p className="text-sm text-primary">About Me</p>
        </button>
      </div>
    );
  };

  return (
    <section className="mt-24 px-12">
      <div className="flex flex-col">
        <h2 className="font-normal text-5xl text-primary w-fit tracking-wider">
          Afolabi Moyinoluwa.
        </h2>

        <h3 className="font-semibold text-7xl text-primaryAlpha mt-2 w-fit tracking-wider">
          Creative Software <br /> Engineer.
        </h3>
        <div className="w-fit">
          <p className="mt-5 text-primaryAlpha max-w-[650px] text-xl tracking-wider">
            I&apos;m a software engineer known for design excellence and a
            dedication to delivering top-notch, user-friendly web applications.
          </p>
        </div>
        {renderAbout()}
        <About open={isDrawerOpen} onClose={handleDrawerClose} />
        <div
          className={`${styles.animatedarrowIcon} flex justify-center mt-20`}
        >
          <ArrowDownIcon
            onClick={handleProjectScroll}
            className="cursor-pointer"
            color="#e6f1ff"
            size={24}
          />
        </div>
      </div>
    </section>
  );
};
