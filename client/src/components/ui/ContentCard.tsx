import VideoIcon from "../icons/VideoIcon"
import AudioIcon from "../icons/AudioIcon"
import TweetIcon from "../icons/TweetIcon"
import BlogIcon from "../icons/BlogIcon"
import OtherIcon from "../icons/OtherIcon"
import LinkCard from "./LinkCard"
import { useToast } from "../../hooks/useToast"
import DropdownMenu from "./DropdownMenu"

interface ContentProps{
    title:string, 
    type:contentType,
    link:string,
    id:string,
    deleteContent:(id:string)=>void,
    [key:string]:unknown
}
type contentType = "video" | "audio" | "tweet" | "blog" | "other";
const Type = {
    "video" : <VideoIcon/>,
    "audio" : <AudioIcon/>,
    "tweet" : <TweetIcon/>,
    "blog":<BlogIcon/>,
    "other":<OtherIcon/>
}

const ContentCard = (props:ContentProps) => {
    const {toast} = useToast()
        const copyToClipboard = (text:string) =>{
            navigator.clipboard.writeText(text);
            toast('info','Link copied to clipboard!')
        }
        const dropdownOptions = [
            {
                label:'Share',
                onClick:()=>copyToClipboard(props.link)
            },
            {
                label:'Delete',
                onClick:()=>props.deleteContent(props.id)
            },
            
        ]
    
  return (
    <div className="flex border-gray-950 border-1 shadow-xl gap-2 flex-col items-center rounded-xl h-[344px] p-4 w-[344px] bg-gray-800 overflow-hidden">
        <div className="flex w-full justify-between items-center px-2 py-1">
        <div className="flex gap-3">
            {Type[props.type]}
            <span className="text-white font-semibold truncate w-[174px]">{props.title}</span>
        </div>
        {/* <div className="flex gap-3">
            <DeleteIcon onClick={props.deleteContent}/>
            <ShareIcon fill="white" onClick={()=>copyToClipboard(props.link)} size={"md"}/>
        </div> */}
        <DropdownMenu options={dropdownOptions}/>
        </div>
        <LinkCard url={props.link}/>
    </div>
  )
}

export default ContentCard