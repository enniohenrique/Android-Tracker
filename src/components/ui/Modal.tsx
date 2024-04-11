import React from 'react';

interface ModalProps {
  isOpen: boolean;
  setOpenModal: (value: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setOpenModal, children }) => {
  if (isOpen) {
    return <div className="absolute right-3">{children}</div>;
  }
  return null;
};

export default Modal;
