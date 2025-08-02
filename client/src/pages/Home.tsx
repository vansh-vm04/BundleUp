import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import PlusIcon from "../components/icons/PlusIcon";
import ShareIcon from "../components/icons/ShareIcon";
import ContentCard from "../components/ui/ContentCard";

interface title {
  [key: string]: string;
}

const content = [
  {
    title: "CSS Grid Crash Course",
    type: "video",
    link: "https://www.youtube.com/watch?v=EFafSYg-PkI"
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
  "": "Bundles",
  video: "Video Content",
  audio: "Audio Content",
  tweet: "Tweets",
  blog: "Blogs",
  other: "Others",
};

const Home = () => {
  const location = useLocation();
  const url: string = location.pathname.replace("/", "");

  return (
    <div className="bg-black/70 items-center ml-[314px] max-md:m-0 flex flex-col w-screen h-screen">
      <div className="w-full py-8 px-10 flex justify-between items-center">
        <span className="text-white text-3xl font-bold items-center justify-center">{Titles[url]}</span>
        <div className="flex gap-4 items-center justify-center">
          <Button
            text="Add Bundle"
            variant="primary"
            startIcon={<PlusIcon />}
          />
          <Button
            text="Share"
            variant="secondary"
            startIcon={<ShareIcon size="md" />}
          />
        </div>
      </div>
      <div className="grid items-center overflow-y-scroll hide-scrollbar scroll-smooth max-md:grid-cols-1 grid-cols-3 py-6 gap-6">
        {content.map((c,i)=>(
          <ContentCard key={i} title={c.title} type={c.type} link={c.link}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
