import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import PlusIcon from "../components/icons/PlusIcon";
import ContentCard from "../components/ui/ContentCard";
import ShareIcon from "../components/icons/ShareIcon";
import { useModal } from "../hooks/useModal";
import { useSidebar } from "../hooks/useSidebar";
import SidebarToggle from "../components/icons/SidebarToggle";
import { useEffect, useState } from "react";
import { useToast } from "../hooks/useToast";
import { useAuth } from "../hooks/useAuth";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/ui/Loading";
import axios from "axios";
const env = import.meta.env;

interface title {
  [key: string]: string;
}

interface contentType {
  type: "" | "video" | "audio" | "blog" | "tweet" | "other";
  [key: string]: string;
}

const Titles: title = {
  "": "All Content",
  video: "Video Content",
  audio: "Audio Content",
  tweet: "Tweets",
  blog: "Blogs",
  other: "Others",
};

const Home = () => {
  const { data, loading, error } = useFetch(
    `${env.VITE_BACKEND_URL}/api/v1/content/all`
  );
  const [filteredContent, setfilteredContent] = useState<contentType[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const sidebar = useSidebar();
  const modal = useModal();
  const location = useLocation();
  const url: string = location.pathname.replace("/", "");
  const { verify } = useAuth();
  const checkLogin = async () => {
    const { loggedIn } = await verify();
    if (!loggedIn) {
      toast("info", "Please signup first");
      navigate("/signup");
    }
  };
  const filterContent = async (path: string) => {
    if (path.length > 0) {
      const content: contentType[] = data.content;
      const newContent = content.filter((o) => o.type == path);
      // console.log(newContent)
      if (newContent) setfilteredContent(newContent);
    } else {
      setfilteredContent(data.content);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (data.content) {
      filterContent(location.pathname.replace("/", ""));
    }
  }, [location.pathname, data]);

  if (error) {
    toast("error", 'Something went wrong');
  }
  const token = localStorage.getItem('token');
  const deleteContent = async (id:string) =>{
    await axios.delete(`${env.VITE_BACKEND_URL}/api/v1/content/${id}`,{
      headers:{
        'Authorization' : 'Bearer '+token
      }
    })
    let newContent = filteredContent.filter(c=>c._id!=id);
    if(newContent) setfilteredContent(newContent);
  }

  return (
    <div
      className={`bg-black/50 duration-500 transform-3d transition-transform items-center ${
        sidebar?.isOpen && "lg:pl-[324px]"
      } max-lg:m-0 max-md:m-0 flex flex-col w-screen h-screen`}
    >
      <div className="w-full py-8 px-10 max-sm:px-2 flex justify-between items-center">
        <div className="flex items-center gap-8 max-md:gap-3">
          {!sidebar?.isOpen && <SidebarToggle />}
          <span className="text-white text-3xl max-sm:text-xl font-regular items-center justify-center">
            {Titles[url]}
          </span>
        </div>
        <div className="flex flex-wrap max-md:gap-2 gap-4 items-center justify-center">
          <Button
            onClick={() => modal.openModal("add-content")}
            text="Add Content"
            variant="primary"
            minimize={true}
            startIcon={<PlusIcon />}
          />
          <Button
            onClick={() => modal.openModal("share-content")}
            text="Share"
            variant="secondary"
            minimize={true}
            startIcon={<ShareIcon size="md" fill="black" />}
          />
        </div>
      </div>
      {filteredContent.length > 0 ? (
        <div className=" items-center justify-center overflow-y-scroll hide-scrollbar scroll-smooth flex flex-wrap py-6 gap-6">
          {filteredContent.map((c, i) => (
            <ContentCard key={i} title={c.title} type={c.type} link={c.link} id={c._id} deleteContent={deleteContent}/>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 pt-50 p-4 text-2xl w-full gap-2 flex flex-col items-center justify-center">
          <span className="text-center">Welcome!</span>
          <span className="text-center">Add some content, it will appear here.</span>
        </div>
      )}
      <Loading loading = {loading}/>
    </div>
  );
};

export default Home;
