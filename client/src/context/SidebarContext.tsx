import { createContext, useState, type ReactNode } from "react";

interface SidebarOptions{
    isOpen:boolean;
    toggle:()=>void;
}

export const SidebarContext = createContext<SidebarOptions | undefined>(undefined);

export const SidebarProvider = ({children}:{children:ReactNode})=>{
    const [isOpen, setisOpen] = useState(false);
    const toggle = ()=> setisOpen(prev => !prev);

    return (
        <SidebarContext.Provider value={{isOpen,toggle}}>
            {children}
        </SidebarContext.Provider>
    )
}

