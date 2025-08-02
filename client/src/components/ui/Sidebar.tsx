import SidebarItem from "./SidebarItem"
import Logo from "../icons/Logo"
import BundlesIcon from "../icons/BundlesIcon"
import TweetIcon from "../icons/TweetIcon"
import VideoIcon from "../icons/VideoIcon"
import BlogIcon from "../icons/BlogIcon"
import OtherIcon from "../icons/OtherIcon"
import AudioIcon from "../icons/AudioIcon"

const Items = [
  {
    text:"Bundles",
    icon:<BundlesIcon/>,
    clicked:true
  },
  {
    text:"Video",
    icon:<VideoIcon/>,
    clicked:false
  },
  {
    text:"Audio",
    icon:<AudioIcon/>,
    clicked:false
  },
  {
    text:"Tweet",
    icon:<TweetIcon/>,
    clicked:false
  },
  {
    text:"Blog",
    icon:<BlogIcon/>,
    clicked:false
  },
  {
    text:"Other",
    icon:<OtherIcon/>,
    clicked:false
  },
]

const Sidebar = () => {
  return (
    <div className="bg-black fixed z-50 pt-4 w-[314px] flex flex-col items-center gap-8 h-screen px-6">
        <div className="border-b-gray-500 border-b">
          <Logo/>
        </div>
        <div className="flex flex-col gap-4">
            <span className="px-8 flex items-center text-gray-400">Menu</span>
        {Items.map((i,_)=>(
          <SidebarItem key={_} text={i.text} icon={i.icon} clicked={i.clicked}/>
        ))}
        </div>
        
    </div>
  )
}

export default Sidebar