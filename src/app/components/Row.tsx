import React from "react";

interface Props {
  children: React.ReactNode;
}
const Row = ({ children }: Props) => {
  return <div className="grid grid-cols-5 gap-2 place-content-center"> {children} </div>;
};

export default Row;
