import React from "react";

interface Props {
  letter: string | React.ReactNode;
  customClass?: string;
  icon?: React.ReactNode;
  status: string;
  onClick?: Function;
}
const Cell = ({
  letter,
  customClass = "grid-width",
  status = "no-match",
  icon,
  onClick,
}: Props) => {
  return (
    <div
      className={`cell ${customClass} ${status}`}
      onClick={() => {
        if (onClick) {
          onClick({ key: letter });
        }
      }}
    >
      {icon ? icon : letter}
    </div>
  );
};

export default Cell;
