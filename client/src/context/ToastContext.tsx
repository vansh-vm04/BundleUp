import { createContext, useState, type ReactNode } from "react"

interface ToastType{
    isVisible:boolean,
    toast: (key:string)=>void,
    message:string,
}

const defaultToast:ToastType = {
    isVisible:false,
    toast:()=>{},
    message:''
}

export const ToastContext = createContext<ToastType>(defaultToast);

export const ToastProvider = ({children}:{children:ReactNode})=>{
    const [isVisible, setisVisible] = useState(false);
    const [message, setmessage] = useState('')
    const toast = (message:string) =>{
        setmessage(message)
        setisVisible(true);
        setTimeout(()=>setisVisible(false),3000);
    }
    return (
        <ToastContext.Provider value={{isVisible,message,toast}}>
            {children}
        </ToastContext.Provider>
    )
}