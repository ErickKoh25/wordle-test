import { Switch } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoIosStats } from "react-icons/io";
import { FaSun, FaMoon  } from "react-icons/fa";


interface Props {
  openInstructionsModal: Function;
  openStatsModal: Function;
}
const Header = ({ openInstructionsModal, openStatsModal }: Props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [theme]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center bg-header rounded-lg w-1/3 h-20 my-7 dark:bg-[#DADCE0] dark:bg-opacity-10">
        <div
          className="text-2xl text-gray-500 mx-5 cursor-pointer dark:text-white"
          onClick={() => openInstructionsModal(true)}
        >
          <BsQuestionCircleFill />
        </div>
        <h1 className="font-roboto text-4xl	font-semibold flex-1 text-center ml-12">
          WORDLE
        </h1>
        <div
          className="text-2xl text-white bg-gray-500 cursor-pointer border-2 rounded-md p-1 dark:text-custom-dark dark:bg-white"
          onClick={() => openStatsModal(true)}
        >
          <IoIosStats />
        </div>
        <Switch
          className="mx-3"
          startContent={<FaMoon />}
          endContent={<FaSun />}
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
    </div>
  );
};

export default Header;
