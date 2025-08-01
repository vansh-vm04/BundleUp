import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import PlusIcon from "../components/icons/PlusIcon";
import ContentCard from "../components/ui/ContentCard";
import ShareIcon from "../components/icons/ShareIcon";

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
    link: "https://www.youtube.com/watch?v=1WmNXEVia8I"
  }
];


const Titles: title = {
  "": "All Contents",
  video: "Video Content",
  audio: "Audio Content",
  tweet: "Tweets",
  blog: "Blogs",
  other: "Others",
};

const Home = () => {
  const location = useLocation();
  const url: string = location.pathname.replace("/", "");

  const shareContents = ()=>{

  }

  const addContent = ()=>{

  }

  return (
    <div className="bg-black/60 items-center ml-[284px] max-lg:m-0 max-md:m-0 flex flex-col w-screen h-screen">
      <div className="w-full py-8 px-10 max-md:px-2 flex max-md justify-between items-center">
        <span className="text-white text-3xl font-bold items-center justify-center">{Titles[url]}</span>
        <div className="flex gap-4 items-center justify-center">
          <Button
          onClick={addContent}
            text="Add Content"
            variant="primary"
            startIcon={<PlusIcon />}
          />
          <Button
          onClick={shareContents}
            text="Share"
            variant="secondary"
            startIcon={<ShareIcon size='md' fill="black"/>}
          />
        </div>
      </div>
      <div className="grid items-center overflow-y-scroll hide-scrollbar scroll-smooth max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-3 py-6 gap-6">
        {content.map((c,i)=>(
          <ContentCard key={i} title={c.title} type={c.type} link={c.link}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
