import React from "react";
import Row from "./Row";
import Cell from "./Cell";

interface Props {
  attempts: Array<String>;
  currentWord: String;
  currentAttempt: Number;
}
const GridSection = ({
  attempts,
  currentWord,
  currentAttempt = 0,
}: Props) => {
  return (
    <div className="flex w-screen flex-col items-center justify-center my-7">
      <Row>
        {attempts.map((attempt: String, i: Number) =>
          new Array(5).fill(0).map((cell, c) => {
            return (
              <Cell
                key={`row-${i}-cell-${c}`}
                letter={attempt[c]}
                status={
                  i >= currentAttempt
                    ? "empty dark:bg-opacity-20"
                    : attempt[c] == currentWord[c]
                    ? "guessed"
                    : currentWord.includes(attempt[c])
                    ? "includes"
                    : "no-match"
                }
              />
            );
          })
        )}
      </Row>
    </div>
  );
};

export default GridSection;
