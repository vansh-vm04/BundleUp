import { useToast } from "../../hooks/useToast";
import CopyIcon from "../icons/CopyIcon";

interface Props{
    copyText:string
}

const CopyLinkCard = (props:Props) => {
    const {toast} = useToast()
    const copyToClipboard = (text:string) =>{
        navigator.clipboard.writeText(text);
        toast('Copied to clipboard!')
    }
  return (
    <div className="grid grid-cols-8 pt-2 gap-2 w-full max-w-[23rem]">
      <input
        id={props.copyText}
        type="text"
        className={`text-to-copy col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        value={props.copyText}
        disabled
        readOnly
      />
      <button
      onClick={()=>copyToClipboard(props.copyText)}
        className="col-span-2 hover:cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center"
      >
        <CopyIcon/>
      </button>
    </div>
  );
};

export default CopyLinkCard;
