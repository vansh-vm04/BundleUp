import { AnimatePresence, motion } from "framer-motion"
import { useToast } from "../../hooks/useToast"

const MessageTypes = {
    'success' : 'bg-green-950 border-green-500',
    'info' : 'bg-blue-950 border-blue-500',
    'error' : 'bg-red-950 border-red-500'
}

const ToastMessage = () => {
    const {isVisible,message,type} = useToast();
  return (
    <AnimatePresence>
    {isVisible && (<motion.div
    initial={{opacity:0,y:-20}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:-20}}
    transition={{duration:0.1, ease:'easeIn'}}
     className={`${MessageTypes[type]} border-1  w-fit top-6 left-1/2 -translate-x-1/2 text-white rounded-md z-54 fixed h-fit px-8 py-4`}>
            <span className="text-gray-200">{message}</span>
    </motion.div>)}
    </AnimatePresence>
  )
}

export default ToastMessage