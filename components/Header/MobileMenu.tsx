import React from "react";

import styled from "styled-components";

import Link from "next/link";

interface IProps {
  open: boolean;
}

export const MobileMenu: React.FC<IProps> = ({ open }) => {
  const renderBody = () => {
    return (
      <ul>
        <li className="p-2.5">
          <Link href="/">Projects</Link>
        </li>
        <li className="p-2.5">
          <Link href="/">About</Link>
        </li>
        <li className="p-2.5">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <Panel className="pt-20 px-5" open={open}>
        {renderBody()}
      </Panel>
    </>
  );
};

const Panel = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 1;
  height: 100%;
  top: 0;
  width: 200px;
  right: ${(props) => (props.open ? "0" : "-250px")};
  background-color: #e6f1ff;
  color: #555555;
  overflow-x: hidden;
  transition: right 0.5s;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 5px;
  }
`;
