import BundlesIcon from "../icons/BundlesIcon"
import ShareIcon from "../icons/ShareIcon"

interface BundleProps{
    title:string,
    onClick:()=>void
}

const BundleCard = (props:BundleProps) => {
  return (
    <div className="flex  shadow-xl gap-2 flex-col items-center rounded-xl h-[344px] p-4 w-[344px] bg-black overflow-hidden">
        <div className="flex w-full justify-between px-2 py-1">
            <span className="text-white font-semibold truncate w-[184px]">{props.title}</span>
            <ShareIcon fill="white" size={"md"}/>
        </div>
        <div onClick={()=>props.onClick()} className="flex items-center justify-center h-full w-full hover:cursor-pointer">
          <BundlesIcon size="lg"/>
        </div>
    </div>
  )
}

export default BundleCard