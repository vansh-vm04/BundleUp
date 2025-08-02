import OtherIcon from "../icons/OtherIcon";

interface LinkProps{
    url:string
}

const LinkCard = (props:LinkProps) => {
    let url:string = props.url;
    if(!url.startsWith("http")) url = "https://"+url;
    const isYoutube:boolean = url.includes("youtu");
    const isTwitter:boolean = url.includes("x.com");
    if(isYoutube){
        if(url.includes("youtu.be")) url = url.replace("youtu.be","youtube.com/embed");
        if(url.includes("www.youtube.com/watch?v=")) url = url.replace("www.youtube.com/watch?v=","www.youtube.com/embed/");
        return <iframe className="w-full h-full" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    }
    if(isTwitter){
        url = url.replace("x.com","twitter.com");
        return <div className="">
            <blockquote class="twitter-tweet" data-theme="dark"><a href={url}>X Post</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    }
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" className="hover:cursor-pointer flex items-center h-full justify-center">
        <OtherIcon size="lg"/>
    </a>
  )
}

export default LinkCard