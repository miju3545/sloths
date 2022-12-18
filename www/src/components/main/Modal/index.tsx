import React, { CSSProperties } from 'react';

type ModalProps = {
  children: React.ReactNode;
  style?: { outer?: CSSProperties; inner?: CSSProperties };
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, style, isOpen, onClose }: ModalProps) => {
  const stopPropagation = (e: any) => e.stopPropagation();

  if (!isOpen) return null;

  return (
    <div className="fullscreen-modal" style={style?.outer} onClick={onClose}>
      <div
        className="fullscreen-modal__inner"
        style={style?.inner}
        onClick={stopPropagation}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
