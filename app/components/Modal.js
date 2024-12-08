"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <p onClick={onHide} className="flex justify-end cursor-pointer">
        <span className="bg-red-500 text-white px-2 py-1 rounded">Back</span>
      </p>
      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
