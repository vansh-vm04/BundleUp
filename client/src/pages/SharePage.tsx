import { useEffect, useState } from "react"
import Logo from "../components/icons/Logo"
import ContentCard from "../components/ui/ContentCard"
import Loading from "../components/ui/Loading"
import { useFetch } from "../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Button from "../components/ui/Button";
import BundlesIcon from "../components/icons/BundlesIcon";
const env = import.meta.env;

interface contentType {
  type: "" | "video" | "audio" | "blog" | "tweet" | "other";
  [key: string]: string;
}

const SharePage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [content, setcontent] = useState<contentType[]>([]);
  const username = location.pathname.replace('/open/','');
  const {loading,data,error} = useFetch(`${env.VITE_BACKEND_URL}/api/v1/open/${username}`)
  useEffect(()=>{
      if(data.content) setcontent(data.content);
  },[data])

  if(error) return <ErrorPage/>;

  return (
    <div
      className={`bg-black/50 duration-500 transform-3d transition-transform items-center max-lg:m-0 max-md:m-0 flex flex-col w-screen h-screen`}
    >
      <div className="w-full py-8 px-10 max-sm:px-2 flex justify-between items-center">
        <div className="flex items-center gap-8 max-md:gap-3">
          <span className="text-white text-3xl max-sm:text-xl font-regular items-center justify-center">
            {username.toUpperCase()}'s Bundle
          </span>
        </div>
        <Button minimize={true} onClick={()=>navigate('/')} variant="primary" text="Make your bundle" startIcon={<BundlesIcon size="md"/>}/>
      </div>
      {content.length > 0 ? (
        <div className=" items-center justify-center overflow-y-scroll hide-scrollbar scroll-smooth flex flex-wrap py-6 gap-6">
          {content.map((c, i) => (
            <ContentCard key={i} title={c.title} type={c.type} link={c.link} id={c._id}/>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 pt-50 p-4 text-2xl w-full gap-2 flex flex-col items-center justify-center">
          <span className="text-center">{username.toUpperCase()}'s content is private</span>
        </div>
      )}
      <Loading loading = {loading}/>
    </div>
  )
}

export default SharePage