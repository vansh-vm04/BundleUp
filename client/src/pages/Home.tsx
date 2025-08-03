import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import PlusIcon from "../components/icons/PlusIcon";
import ContentCard from "../components/ui/ContentCard";
import ShareIcon from "../components/icons/ShareIcon";
import { useModal } from "../hooks/useModal";
import { useSidebar } from "../hooks/useSidebar";
import SidebarToggle from "../components/icons/SidebarToggle";

interface title {
  [key: string]: string;
}

const content = [
  {
    title: "Fell for you",
    type: "audio",
    link: "https://open.spotify.com/track/5ZLkihi6DVsHwDL3B8ym1t?si=42dc7db4caef4c78"
  },
  {
    title: "Understanding Promises in JavaScript",
    type: "video",
    link: "https://www.youtube.com/watch?v=DHvZLI7Db8E"
  },
  {
    title: "React.js Official Tutorial",
    type: "video",
    link: "https://www.youtube.com/watch?v=SqcY0GlETPk"
  },
  {
    title: "Build and Deploy a Full Stack App with Mongo, Express, React & Node",
    type: "video",
    link: "https://www.youtube.com/watch?v=4yqu8YF29cU"
  },
  {
    title: "Learn Tailwind CSS in 20 Minutes",
    type: "video",
    link: "https://www.youtube.com/watch?v=mr15Xzb1Ook"
  },
  {
    title: "JavaScript Event Loop Explained",
    type: "video",
    link: "https://www.youtube.com/watch?v=8aGhZQkoFbQ"
  },
  {
    title: "How Git Works in 100 Seconds",
    type: "video",
    link: "https://www.youtube.com/watch?v=USjZcfl8yxE"
  },
  {
    title: "Next.js Crash Course",
    type: "video",
    link: "https://www.ytube.com/watch?v=1WmNXEVia8I"
  }
];


const Titles: title = {
  "": "All Content",
  video: "Video Content",
  audio: "Audio Content",
  tweet: "Tweets",
  blog: "Blogs",
  other: "Others",
};

const Home = () => {
  const sidebar = useSidebar();
  const modal = useModal()
  const location = useLocation();
  const url: string = location.pathname.replace("/", "");

  return (
    <div className={`bg-black/50 duration-500 transform-3d transition-transform items-center ${sidebar?.isOpen && 'lg:pl-[324px]'} max-lg:m-0 max-md:m-0 flex flex-col w-screen h-screen`}>
      <div className="w-full py-8 px-10 max-md:px-2 flex max-md justify-between items-center">
        <div className="flex items-center gap-8 max-md:gap-3">
          {!sidebar?.isOpen && <SidebarToggle/>}
          <span className="text-white text-3xl max-md:text-xl font-regular items-center justify-center">{Titles[url]}</span>
        </div>
        <div className="flex flex-wrap max-md:gap-2 gap-4 items-center justify-center">
          <Button
          onClick={()=>modal.openModal('add-content')}
            text="Add Content"
            variant="primary"
            startIcon={<PlusIcon />}
          />
          <Button
          onClick={()=>modal.openModal('share-content')}
            text="Share"
            variant="secondary"
            startIcon={<ShareIcon size='md' fill="black"/>}
          />
        </div>
      </div>
      <div className=" items-center justify-center overflow-y-scroll hide-scrollbar scroll-smooth flex flex-wrap py-6 gap-6">
        {content.map((c,i)=>(
          <ContentCard key={i} title={c.title} type={c.type} link={c.link}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
