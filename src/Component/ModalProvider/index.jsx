import React from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalProvider = (props) => {
  const { children, modalBtnVariant, isOpen, closeModal, modalTitle } = props;
  return (
    <div>
      {modalBtnVariant}
      <Modal open={isOpen} onClose={closeModal}>
        <div className="text-blue-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-stone-50 p-4 flex flex-col gap-4 rounded bg-blue-600">
          <div className="flex justify-between items-center">
            <span className="font-medium">{modalTitle}</span>
            <button
              onClick={() => closeModal()}
              className="text-stone-950 hover:text-stone-950 rounded-full"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="">{children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalProvider;
