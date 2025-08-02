import VideoIcon from "../icons/VideoIcon"
import AudioIcon from "../icons/AudioIcon"
import TweetIcon from "../icons/TweetIcon"
import BlogIcon from "../icons/BlogIcon"
import OtherIcon from "../icons/OtherIcon"
import EditIcon from "../icons/EditIcon"
import ShareIcon from "../icons/ShareIcon"
import LinkCard from "./LinkCard"

interface ContentProps{
    title:string, 
    type:contentType,
    link:string,
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
  return (
    <div className="flex shadow-xl gap-2 flex-col items-center rounded-xl h-[344px] p-4 w-[344px] bg-black overflow-hidden">
        <div className="flex w-full justify-between px-2 py-1">
        <div className="flex gap-3">
            {Type[props.type]}
            <span className="text-white font-semibold truncate w-[144px]">{props.title}</span>
        </div>
        <div className="flex gap-3">
            <EditIcon size={"md"}/>
            <ShareIcon fill="white" size={"md"}/>
        </div>
        </div>
        <LinkCard url={props.link}/>
    </div>
  )
}

export default ContentCard