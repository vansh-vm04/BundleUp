import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export const useSidebar = () =>{
    const context = useContext(SidebarContext);
    return context;
}