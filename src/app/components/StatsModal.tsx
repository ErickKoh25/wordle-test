import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "@nextui-org/react";
import React from "react";
import { getTimeFormat } from "../commons/helpers";

interface Props {
  isOpen: boolean;
  onClose: Function;
  showWord: boolean;
  currentWord: String;
  stats: { played: number; won: number; remainingTime: number };
}

const StatsModal = ({
  isOpen,
  onClose,
  showWord,
  currentWord,
  stats: { played, won, remainingTime },
}: Props) => {
  return (
    <Modal backdrop="blur" isOpen={isOpen} hideCloseButton className="dark:bg-custom-dark dark:text-white">
      <ModalContent>
        <ModalBody>
          <h1 className="font-roboto font-semibold text-center my-7 text-4xl">
            Estadísticas
          </h1>
          <div className="flex text-center items-center justify-between gap-2">
            <div className="mx-4">
              <div className="text-2xl">{played}</div>
              <div className="text-xl">Jugadas</div>
            </div>
            <div className="mx-4">
              <div className="text-2xl">{won}</div>
              <div className="text-xl">Victorias</div>
            </div>
          </div>
          {showWord && (
            <div className="flex text-center items-center justify-center">
              La palabra era: <b>{currentWord}</b>
            </div>
          )}
          <div className="flex text-center items-center justify-center">
            SIGUIENTE PALABRA
          </div>
          <div className="flex text-center items-center justify-center font-semibold text-2xl">
            { getTimeFormat(remainingTime) }
          </div>
        </ModalBody>
        <ModalFooter className="text-center justify-center mb-2">
          <Button
            type="button"
            onClick={() => onClose(false)}
            className="confirm-button flex text-center items-center justify-center"
          >
            Aceptar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StatsModal;
