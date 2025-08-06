import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useModal } from "../../hooks/useModal";
import CrossIcon from "../icons/CrossIcon";
import ToggleButton from "./ToggleButton";
import CopyLinkCard from "./CopyLinkCard";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
const env = import.meta.env

const ShareContentModal = () => {
  const [share, setshare] = useState<boolean | undefined>(undefined);
  const [username, setusername] = useState<string>()
  const modal = useModal();
  const {verify,token} = useAuth();
  const loadShare = async ()=>{
    let {sharing,username} = await verify();
    setshare(sharing);
    setusername(username);
  }
  const shareToggle = async () =>{
    await axios.patch(`${env.VITE_BACKEND_URL}/api/v1/share`,{
      sharing:share
    },{
      headers:{
        'Authorization':'Bearer '+token
      }
    });
  }
  useEffect(()=>{
    loadShare();
  },[modal.isOpen('share-content')])
  useEffect(()=>{
    shareToggle();
  },[share])
  return (
    <AnimatePresence>
      {modal.isOpen("share-content") && (
        <div
          onClick={modal.closeModal}
          className="bg-white/20 w-screen h-screen fixed z-52 flex items-center justify-center"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="bg-black w-[344px] rounded-2xl gap-2 py-8 px-8 shadow-lg flex flex-col justify-center items-center"
          >
            <div className="flex z-2 w-full justify-end">
              <CrossIcon onClick={modal.closeModal} />
            </div>
            <ToggleButton onClick={()=>setshare(prev=>!prev)} isOn={share} label="Share your bundle" />
            <CopyLinkCard copyText={`${env.VITE_FRONTEND_URL}/open/${username}`}/>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ShareContentModal;
