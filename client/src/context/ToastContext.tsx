import { createContext, useState, type ReactNode } from "react"

type ToastTheme = 'success' | 'error' | 'info'

interface ToastType{
    isVisible:boolean,
    toast: (type:ToastTheme,message:string)=>void,
    message:string,
    type: ToastTheme
}

const defaultToast:ToastType = {
    isVisible:false,
    toast:()=>{},
    message:'',
    type:'info'
}

export const ToastContext = createContext<ToastType>(defaultToast);

export const ToastProvider = ({children}:{children:ReactNode})=>{
    const [isVisible, setisVisible] = useState(false);
    const [message, setmessage] = useState('')
    const [type, settype] = useState<ToastTheme>('info')
    const toast = (type:ToastTheme,message:string) =>{
        settype(type)
        setmessage(message)
        setisVisible(true);
        setTimeout(()=>setisVisible(false),3000);
    }
    return (
        <ToastContext.Provider value={{isVisible,message,toast,type}}>
            {children}
        </ToastContext.Provider>
    )
}