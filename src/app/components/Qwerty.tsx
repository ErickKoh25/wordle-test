import React from "react";
import { QUERTY } from "../commons/constants";
import { PiBackspaceLight } from "react-icons/pi";
import Cell from "./Cell";

interface Props {
  currentWord: String;
  currentAttempt: number;
  attempts: Array<String>;
  onClick: Function;
}

const Qwerty = ({ currentWord, currentAttempt, attempts, onClick = () => {} }: Props) => {
const newArray = attempts.filter((item, i) => i !== currentAttempt );
  const guessed = newArray.map((attempt, i) =>
    new Array(5).fill(0).map((cell, c) => {
      return attempt[c] == currentWord[c] ? currentWord[c] : "";
    })
  );
  const includes = newArray.map((attempt, i) =>
    new Array(5).fill(0).map((cell, c) => {
      return currentWord.includes(attempt[c]) ? attempt[c] : "";
    })
  );
  const noMatch = newArray.map((attempt, i) =>
    new Array(5).fill(0).map((cell, c) => {
      return !currentWord.includes(attempt[c]) ? attempt[c] : "";
    })
  );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="qwerty dark:bg-[#DADCE0] dark:bg-opacity-10">
        {QUERTY.map((row, i) => (
          <div
            key={`qwerty-row-${i}`}
            className={`flex justify-center font-roboto font-light ${
              i == 1 ? "ml-14" : i == 2 ? "mr-14" : ""
            }`}
          >
            {i == 2 && (
              <Cell
                key={`enter`}
                letter="Enter"
                status="empty"
                customClass="keys-width px-6 cursor-pointer text-base dark:bg-[#565F7E]"
                onClick={onClick}
              />
            )}
            {row.split("").map((key) => (
              <Cell
                key={`${key}`}
                letter={key}
                status={
                  guessed.join("").includes(key)
                    ? "guessed"
                    : includes.join("").includes(key)
                    ? "includes"
                    : noMatch.join("").includes(key)
                    ? "no-match"
                    : "empty dark:bg-[#565F7E]"
                }
                customClass="keys-width cursor-pointer text-base"
                onClick={onClick}
              />
            ))}
            {i == 2 && (
              <Cell
                key={`backspace`}
                letter={'Backspace'}
                icon={<PiBackspaceLight />}
                status="empty"
                customClass="keys-width px-6 cursor-pointer text-base dark:bg-[#565F7E]"
                onClick={onClick}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qwerty;
