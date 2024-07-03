import React from "react";

interface Props {
  letter: string | React.ReactNode;
  customClass?: string;
  status: string;
  onClick?: Function;
}
const Cell = ({
  letter,
  customClass = "grid-width",
  status = "no-match",
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
      {letter}
    </div>
  );
};

export default Cell;
