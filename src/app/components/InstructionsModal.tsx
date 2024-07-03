"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import Cell from "./Cell";
import { EXAMPLE_WORDS } from "../commons/constants";
import { useAppDispatch } from "@/redux/hooks";
import {
  setDisabledFirstLoad,
  setCurrentWord,
} from "@/redux/actions/wordsSlice";
import Row from "./Row";

interface Props {
  firstLoad: boolean;
  isOpen: boolean;
  onClose: Function;
}
const InstructionsModal = ({ firstLoad, isOpen = false, onClose }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Modal backdrop="blur" isOpen={isOpen} hideCloseButton size="lg" className="dark:bg-custom-dark dark:text-white">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-center mt-2">
          <h1 className="font-bold font-roboto text-4xl">Cómo jugar</h1>
        </ModalHeader>
        <ModalBody>
          <p> Adivina la palabra oculta en cinco intentos.</p>
          <p>Cada intento debe ser una palabra válida de 5 letras.</p>
          <p>
            Después de cada intento el color de las letras cambia para mostrar
            qué tan cerca estás de acertar la palabra.
          </p>
          <p className="font-semibold">Ejemplos</p>
          <Row>
            {EXAMPLE_WORDS[0].split("").map((letter: string, i: any) => {
              return (
                <Cell
                  key={`${letter}-${i}`}
                  letter={letter}
                  customClass="grid-width dark:border-slate-400"
                  status={i == 0 ? "guessed" : ""}
                />
              );
            })}
          </Row>

          <p>
            La letra <b>G</b> está en la palabra y en la posición correcta.
          </p>
          <Row>
            {EXAMPLE_WORDS[1].split("").map((letter: string, i: any) => {
              return (
                <Cell
                  key={`${letter}-${i}`}
                  letter={letter}
                  customClass="grid-width dark:border-slate-400"
                  status={i == 2 ? "includes" : ""}
                />
              );
            })}
          </Row>
          <p>
            La letra <b>C</b> está en la palabra pero en la posición incorrecta.
          </p>
          <Row>
            {EXAMPLE_WORDS[2].split("").map((letter: string, i: any) => {
              return (
                <Cell
                  key={`${letter}-${i}`}
                  letter={letter}
                  customClass="grid-width dark:border-slate-400"
                  status={i == 4 ? "no-match" : ""}
                />
              );
            })}
          </Row>
          <p>
            La letra <b>O</b> no está en la palabra.
          </p>
          <p>
            Puede haber letras repetidas. Las pistas son independientes para
            cada letra.
          </p>
          <p className="text-center">!Una palabra nueva cada 5 minutos!</p>
        </ModalBody>
        <ModalFooter className="text-center justify-center mb-2">
          <Button
            type="button"
            className="play-button"
            onClick={() => {
              if (firstLoad) {
                dispatch(setDisabledFirstLoad(false));
                dispatch(setCurrentWord());
              } else {
                onClose(false);
              }
            }}
          >
            !JUGAR¡
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InstructionsModal;
