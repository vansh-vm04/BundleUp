import { AnimatePresence, motion } from "framer-motion";
import InputBox from "./InputBox";
import Button from "./Button";
import { useRef } from "react";
import SelectOption from "./SelectOption";
import CrossIcon from "../icons/CrossIcon";
import { useModal } from "../../hooks/useModal";
import axios from "axios";
import { useToast } from "../../hooks/useToast";
const env = import.meta.env;

const CreateContentModal = () => {
  const modal = useModal();
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const typeRef = useRef<HTMLSelectElement>(null);
  const typeOptions = [
    {
      label: "Video",
      value: "video",
    },
    {
      label: "Audio",
      value: "audio",
    },
    {
      label: "Tweet",
      value: "tweet",
    },
    {
      label: "Blog",
      value: "blog",
    },
    {
      label: "Other",
      value: "other",
    },
  ];
  const { toast } = useToast();
  const addContent = async () => {
    if (!titleRef.current?.value || !typeRef.current?.value || !linkRef.current?.value) {
      toast("error", "Please fill in all fields.");
      return;
    }
    if(titleRef.current.value.length > 30){
      toast('error','Title is too long')
      return;
    }
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${env.VITE_BACKEND_URL}/api/v1/content`,
        {
          title: titleRef.current?.value,
          type: typeRef.current?.value,
          link: linkRef.current?.value,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast('success','Content added to bundle');
      modal.closeModal()
    } catch (error) {
      toast('error','Something went wrong, try again')
      console.log(error)
    }
  };
  return (
    <AnimatePresence>
      {modal.isOpen("add-content") && (
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
            className="bg-black w-[344px] rounded-2xl gap-2 py-8 px-8 shadow-lg flex flex-col items-center"
          >
            <div className="flex z-2 w-full justify-end">
              <CrossIcon onClick={modal.closeModal} />
            </div>
            <span className="text-white text-xl font-semibold">
              Content Details
            </span>
            <InputBox
              ref={titleRef}
              id="title"
              label="Title"
              placeholder="Enter content title"
            />
            <InputBox
              ref={linkRef}
              id="link"
              label="Link"
              placeholder="Enter content link"
            />
            <SelectOption
              options={typeOptions}
              ref={typeRef}
              id="type"
              label="Type"
            />
            <Button
              text="Submit"
              variant="primary"
              onClick={() => addContent()}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreateContentModal;
