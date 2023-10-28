import React from "react";
import { forwardRef, Ref } from "react";
import Link from "next/link";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { GmailIcon } from "@/components/icons/GmailIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";

const Contact = forwardRef((props: any, ref: Ref<HTMLDivElement>) => {
  return (
    <section className="my-20 lg:my-24 px-5 lg:px-12" ref={ref} {...props}>
      <div className="flex items-center lg:justify-start">
        <span className="w-32 h-px bg-secondary"></span>
        <h3 className="text-primaryAlpha ml-2">Contact</h3>
      </div>
      <div className="mt-10">
        <h3 className="text-primary text-4xl lg:text-7xl font-bold hover:text-primaryAlpha transition-all  duration-300 ease-linear delay-0 cursor-pointer text-center lg:w-fit">
          Say hello,
        </h3>
        <div className="flex flex-row justify-center lg:justify-start mt-10">
          <Link
            href="https://github.com/emmacode"
            className="mr-4"
            target="_blank"
          >
            <GithubIcon size={30} />
          </Link>
          <Link
            href="mailto:afolabimoyinoluwa4@gmail.com"
            className="mr-4"
            target="_blank"
          >
            <GmailIcon size={30} />
          </Link>
          <Link
            href="https://twitter.com/soft_moyin/"
            className="mr-4"
            target="_blank"
          >
            <TwitterIcon size={30} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/afolabimoyinoluwa/"
            target="_blank"
          >
            <LinkedInIcon size={30} />
          </Link>
        </div>
      </div>
    </section>
  );
});

Contact.displayName = "Contact";
export { Contact };
