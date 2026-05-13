import type { ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="border-brand-100 relative z-10 w-full max-w-md rounded-2xl border bg-white p-6 shadow-xl">
        {children}
      </div>
    </div>,

    document.body,
  );
}
