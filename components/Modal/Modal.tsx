import React from "react";
import { useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import classNames from "classnames";

import useSsr from "@/hook/useSsr";
import { CancelIcon } from "../icons/CancelIcon";

interface IProps {
  onClose: () => void;
  children?: ReactNode;
  width?: "md" | "lg";
  open?: boolean;
}

const sleep = (duration: number): Promise<null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, duration);
  });
};

export const Modal: React.FC<IProps> = ({
  onClose,
  children,
  width = "md",
  open = false,
}) => {
  const [hasModalBeenAppendedToBody, setHasModalBeenAppendedToBody] =
    useState(false);
  const [internallyOpen, setInternallyOpen] = useState(false);
  const [isModalOnScreen, setIsModalOnScreen] = useState(false);
  const { isBrowser } = useSsr();
  const portalRef = useRef(isBrowser ? document.createElement("div") : null);

  useEffect(() => {
    document.body.append(portalRef.current!);
    setHasModalBeenAppendedToBody(true);

    return () => {
      document.getElementsByTagName("body")[0].style.overflowY = "";
      portalRef.current!.remove();
    };
  }, []);

  useEffect(() => {
    (async function () {
      if (open) {
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";

        setInternallyOpen(true);
        await sleep(100);

        setIsModalOnScreen(true);

        return;
      }

      document.getElementsByTagName("body")[0].style.overflowY = "";

      setIsModalOnScreen(false);
      await sleep(500);
      setInternallyOpen(false);
    })();
  }, [open]);

  const renderHeader = () => {
    return (
      <div className="flex justify-end">
        <button onClick={onClose}>
          <CancelIcon />
        </button>
      </div>
    );
  };

  const renderModal = () => {
    return (
      <div
        className={classNames("modal", { open: internallyOpen })}
        tabIndex={isModalOnScreen ? 0 : -1}
      >
        <div
          className={classNames("modal-overlay", {
            "modal-overlay-motion": isModalOnScreen,
          })}
          onClick={onClose}
        />
        <div
          className={classNames("modal-contentContainer", {
            open: internallyOpen,
            motion: isModalOnScreen,
            "lg:w-6/12 xl:w-4/12": width === "md",
            "lg:w-7/12 xl:w-5/12": width === "lg",
          })}
        >
          {renderHeader()}
          {children}
        </div>
      </div>
    );
  };

  if (hasModalBeenAppendedToBody) {
    return createPortal(renderModal(), portalRef.current!);
  }

  return <div>hel</div>;
};
