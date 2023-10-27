import React from "react";

import { useScrollToRef } from "@/hook/useScroll";
import { Header } from "@/components/Header/Header";

import { Introduction } from "./sections/Introduction/introduction";
import { Project } from "./sections/Projects/Project";
import { Contact } from "./sections/Contact/Contact";

export default function Home() {
  const projectScroll = useScrollToRef();
  const contactScroll = useScrollToRef();

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Header
          handleProjectScroll={projectScroll.scrollToRef}
          handleContactScroll={contactScroll.scrollToRef}
        />
        <Introduction handleProjectScroll={projectScroll.scrollToRef} />
        <Project ref={projectScroll.ref} />
        <Contact ref={contactScroll.ref} />
      </div>
    </>
  );
}
