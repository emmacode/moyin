import React from "react";

interface IProps {
  size?: number;
  color?: string;
}

export const CancelIcon: React.FC<IProps> = ({
  size = 20,
  color = "#ef3636",
}) => {
  return (
    <svg
      style={{ width: size, height: size }}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1L1 13M1 1L13 13"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
