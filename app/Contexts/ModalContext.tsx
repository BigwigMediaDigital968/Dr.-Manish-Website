// contexts/ModalContext.tsx
"use client";

import { createContext, useContext, useState } from "react";
import Popup from "../component/website/Popup";

const ModalContext = createContext<any>(null);

export function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}

      <Popup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);