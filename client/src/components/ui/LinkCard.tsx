import { getDomainLogo } from "../../utils/domainLogo";
import BundlesIcon from "../icons/BundlesIcon";

interface LinkProps{
    url:string
}

const LinkCard = (props:LinkProps) => {
    let url:string = props.url;
    if(!url.startsWith("http")) url = "https://"+url;
    const isYoutube:boolean = url.includes("youtu");
    const isTwitter:boolean = url.includes("x.com");
    const isSpotify:boolean = url.includes('open.spotify.com')
    if(isYoutube){
        if(url.includes("youtu.be")) url = url.replace("youtu.be","youtube.com/embed");
        if(url.includes("www.youtube.com/watch?v=")) url = url.replace("www.youtube.com/watch?v=","www.youtube.com/embed/");
        return <iframe className="w-full h-full" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
    if(isTwitter){
        url = url.replace("x.com","twitter.com");
        return <div className="">
            <blockquote className="twitter-tweet" data-theme="dark"><a href={url}>X Post</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charet="utf-8"></script>
        </div>
    }
    if(isSpotify){
        url = url.replace('open.spotify.com','open.spotify.com/embed');
        return <div>
         <iframe data-testid="embed-iframe" styles="border-radius:12px" src={url} width="100%" height={'344px'} frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>
    </div>
    }
    const logo = getDomainLogo(url);
    if(logo){
        return (
            <a target="_blank" href={url} className="flex hover:cursor-pointer w-full h-full items-center justify-center">
            <img className="w-30" src={logo}></img>
            </a>
        )
    }

  return (
    <a target="_blank" href={url} className="flex items-center justify-center h-full w-full hover:cursor-pointer">
          <BundlesIcon size="lg"/>
    </a>
  )
}

export default LinkCard