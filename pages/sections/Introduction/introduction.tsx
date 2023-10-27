import { ArrowDownIcon } from "@/components/icons/ArrowDownIcon";

import styles from "./introduction.module.css";
import { useState } from "react";
import { Modal } from "@/components/Modal/Modal";

interface IProps {
  handleProjectScroll: () => void;
}

export const Introduction: React.FC<IProps> = ({ handleProjectScroll }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const renderAbout = () => {
    return (
      <div>
        <button
          onClick={() => setIsModalOpen(true)}
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
        <h2 className="font-semibold text-6xl text-primary w-fit tracking-wider">
          Afolabi Moyinoluwa.
        </h2>

        <h3 className="font-semibold text-6xl text-primaryAlpha mt-2 w-fit tracking-wider">
          Creative Software Engineer.
        </h3>
        <div className="w-fit">
          <p className="mt-5 text-primaryAlpha max-w-[540px] text-xl tracking-wider">
            I&apos;m a software engineer known for design excellence and a
            dedication to delivering top-notch, user-friendly web applications.
          </p>
        </div>
        {renderAbout()}
        <Modal open={isModalOpen} onClose={handleModalClose}>
          <p>We are header</p>
        </Modal>
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
