import { createContext, useState, type ReactNode } from "react";

type ModalType = 'add-content' | 'share-content' | 'confirm-dialog' | null;

interface ModalContextType{
    isOpen:(key:ModalType)=>boolean,
    openModal:(key:ModalType)=>void,
    closeModal:()=>void
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

type Props = {children:ReactNode};

export const ModalProvider = ({children}:Props)=>{
    const [currentOpen, setcurrentOpen] = useState<ModalType>(null);
    const isOpen = (key:ModalType) => key===currentOpen;
    const openModal = (key:ModalType) => setcurrentOpen(key);
    const closeModal = () => setcurrentOpen(null);

    return (
        <ModalContext.Provider value={{isOpen,openModal,closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}