/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import GridSection from "./components/GridSection";
import InstructionsModal from "./components/InstructionsModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Qwerty from "./components/Qwerty";
import { useEffect, useState } from "react";
import { QUERTY } from "./commons/constants";
import {
  incrementPlayed,
  incrementWon,
  removeWord,
  reset,
  setCurrentAttempt,
  updateAttempts,
} from "@/redux/actions/wordsSlice";
import Header from "./components/Header";
import StatsModal from "./components/StatsModal";

export default function Home() {
  const { attempts, currentWord, currentAttempt, firstLoad, played, won } =
    useAppSelector((state) => state.wordsReducer);
  const dispatch = useAppDispatch();
  const [isGuessed, setIsGuessed] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [isOpenInstructionsModal, setIsOpenInstructionsModal] = useState(false);
  const [isOpenStatsModal, setIsOpenStatsModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const validateWord = () => {
    if (attempts[currentAttempt] == currentWord) {
      dispatch(incrementWon());
      dispatch(incrementPlayed());
      dispatch(removeWord(currentWord));
      setIsGuessed(true);
      setIsOpenStatsModal(true);
    }
    dispatch(setCurrentAttempt(currentAttempt + 1));
  };

  const onKeyUp = (event: any) => {
    try {
      if (isGuessed) return;

      if (event.key == "Enter" && attempts[currentAttempt].length == 5) {
        validateWord();
      }

      if (event.key == "Backspace") {
        const attempt = attempts[currentAttempt]
          ? attempts[currentAttempt].slice(
              0,
              attempts[currentAttempt].length - 1
            )
          : "";
        dispatch(updateAttempts(attempt));
      }

      if (QUERTY.join("").includes(event.key.toUpperCase())) {
        const attempt = attempts[currentAttempt]
          ? attempts[currentAttempt].concat(event.key.toUpperCase())
          : event.key.toUpperCase();
        dispatch(updateAttempts(attempt));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const timer = (seconds: number, cb: Function) => {
    let time = seconds;
    window.setTimeout(function () {
      cb();
      console.log(time);
      if (time > 0) {
        timer(time - 1, cb);
        setRemainingTime(time - 1);
      } else {
        dispatch(reset());
        setIsOpenStatsModal(false);
      }
    }, 1000);
  };

  const callback = () => {
    console.log("callback");
  };

  useEffect(() => {
    if (currentAttempt === 6) {
      dispatch(incrementPlayed());
      dispatch(removeWord(currentWord));
      setIsOpenStatsModal(true);
      setShowWord(true);
    }

    if (currentAttempt < 6 && attempts[currentAttempt].length == 5) {
      validateWord();
    }

    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [attempts[currentAttempt], currentAttempt]);

  useEffect(() => {
    setIsGuessed(false);
    setShowWord(false);
    timer(300, callback);
  }, [currentWord]);

  return (
    <div>
      <InstructionsModal
        firstLoad={firstLoad}
        isOpen={firstLoad || isOpenInstructionsModal}
        onClose={setIsOpenInstructionsModal}
      />
      <Header
        openInstructionsModal={setIsOpenInstructionsModal}
        openStatsModal={setIsOpenStatsModal}
      />
      <GridSection
        attempts={attempts}
        currentWord={currentWord}
        currentAttempt={currentAttempt}
      />
      <Qwerty
        currentWord={currentWord}
        attempts={attempts}
        onClick={onKeyUp}
      />
      <StatsModal
        isOpen={isOpenStatsModal}
        onClose={setIsOpenStatsModal}
        showWord={showWord}
        currentWord={currentWord}
        stats={{ played, won, remainingTime }}
      />
    </div>
  );
}
