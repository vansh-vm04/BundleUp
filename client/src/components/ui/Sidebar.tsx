import SidebarItem from "./SidebarItem"
import Logo from "../icons/Logo"
import BundlesIcon from "../icons/BundlesIcon"
import TweetIcon from "../icons/TweetIcon"
import VideoIcon from "../icons/VideoIcon"
import BlogIcon from "../icons/BlogIcon"
import OtherIcon from "../icons/OtherIcon"
import AudioIcon from "../icons/AudioIcon"
import { useLocation, useNavigate } from "react-router-dom"

const Sidebar = () => {
  const location = useLocation();
const route = location.pathname.replace('/','');
const navigate = useNavigate()
const Items = [
  {
    text:"Contents",
    icon:<BundlesIcon size="md"/>,
    clicked:(route===''),
    route:'/'
  },
  {
    text:"Video",
    icon:<VideoIcon/>,
    clicked:(route==='video'),
    route:'/video'
  },
  {
    text:"Audio",
    icon:<AudioIcon/>,
    clicked:(route==='audio'),
    route:'/audio'
  },
  {
    text:"Tweet",
    icon:<TweetIcon/>,
    clicked:(route==='tweet'),
    route:'/tweet'
  },
  {
    text:"Blog",
    icon:<BlogIcon/>,
    clicked:(route==='blog'),
    route:'/blog'
  },
  {
    text:"Other",
    icon:<OtherIcon/>,
    clicked:(route==='other'),
    route:'/other'
  },
]

  return (
    <div className="bg-black fixed z-50 pt-4 w-[284px] flex flex-col items-center gap-8 h-screen px-6">
        <div className="border-b-gray-500 border-b">
          <Logo/>
        </div>
        <div className="flex flex-col gap-4">
            <span className="px-8 flex items-center text-gray-400">Menu</span>
        {Items.map((i,_)=>(
          <SidebarItem onClick={()=>navigate(i.route)} key={_} text={i.text} icon={i.icon} clicked={i.clicked}/>
        ))}
        </div>
        
    </div>
  )
}

export default Sidebar