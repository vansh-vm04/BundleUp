import SidebarItem from "./SidebarItem";
import Logo from "../icons/Logo";
import BundlesIcon from "../icons/BundlesIcon";
import TweetIcon from "../icons/TweetIcon";
import VideoIcon from "../icons/VideoIcon";
import BlogIcon from "../icons/BlogIcon";
import OtherIcon from "../icons/OtherIcon";
import AudioIcon from "../icons/AudioIcon";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarToggle from "../icons/SidebarToggle";
import { useSidebar } from "../../hooks/useSidebar";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import UserCard from "./UserCard";

const Sidebar = () => {
  const sidebar = useSidebar();
  const location = useLocation();
  const route = location.pathname.replace("/", "");
  const navigate = useNavigate();
  const Items = [
    {
      text: "Contents",
      icon: <BundlesIcon size="md" />,
      clicked: route === "",
      route: "/",
    },
    {
      text: "Video",
      icon: <VideoIcon />,
      clicked: route === "video",
      route: "/video",
    },
    {
      text: "Audio",
      icon: <AudioIcon />,
      clicked: route === "audio",
      route: "/audio",
    },
    {
      text: "Tweet",
      icon: <TweetIcon />,
      clicked: route === "tweet",
      route: "/tweet",
    },
    {
      text: "Blog",
      icon: <BlogIcon />,
      clicked: route === "blog",
      route: "/blog",
    },
    {
      text: "Other",
      icon: <OtherIcon />,
      clicked: route === "other",
      route: "/other",
    },
  ];

  return (
    <AnimatePresence>
    {sidebar?.isOpen && (<motion.div
      initial={{ x: -324 }}
      animate={{ x: 0 }}
      exit={{ x: -324 }}
      transition={{ duration: 0.2, ease: "easeIn" }}
      className="bg-black fixed z-50 w-[324px] flex flex-col items-center gap-8 h-screen px-6"
    >
      <div className="flex pb-8 flex-col w-full h-full items-center justify-between">
        <div className="flex flex-col items-center gap-8 h-screen px-6">
      <div className="border-b-gray-500 py-8 flex items-center w-full justify-between border-b">
        <Logo />
        <SidebarToggle />
      </div>
      <div className="flex flex-col gap-4">
        <span className="px-8 flex items-center text-gray-400">Menu</span>
        {Items.map((i, _) => (
          <SidebarItem
            onClick={() => navigate(i.route)}
            key={_}
            text={i.text}
            icon={i.icon}
            clicked={i.clicked}
          />
        ))}
      </div>
      </div>
      <UserCard username="vanshdusjdj"/>
      </div>
    </motion.div>)}
    </AnimatePresence>
  );
};

export default Sidebar;
