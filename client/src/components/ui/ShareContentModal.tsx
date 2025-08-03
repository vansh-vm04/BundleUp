import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useModal } from '../../hooks/useModal'
import CrossIcon from '../icons/CrossIcon'
import ToggleButton from './ToggleButton'

const ShareContentModal = () => {
  const modal = useModal()
  return (
    <AnimatePresence>
    {modal.isOpen('share-content') && (
        <div onClick={modal.closeModal} className="bg-white/20 w-screen h-screen fixed z-52 flex items-center justify-center">
          <motion.div
          onClick={(e)=>e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{opacity:0, scale:0.5}}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="bg-black w-[344px] rounded-2xl gap-2 py-8 px-8 shadow-lg flex flex-col items-center"
          >
            <div
              className="flex z-2 w-full justify-end"
            >
              <CrossIcon onClick={modal.closeModal}/>
            </div>
            <ToggleButton isOn={false} label='Share Content'/>
          </motion.div>
          </div>
    )}
    </AnimatePresence>
  )
}

export default ShareContentModal