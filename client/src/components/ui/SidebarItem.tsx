import type { ReactElement } from "react"

interface ItemProps{
    text:string,
    icon:ReactElement,
    clicked:boolean
}

const SidebarItem = (props:ItemProps) => {
  return (
    <div className={`${props.clicked ? "bg-white/10 text-white" : "bg-black text-gray-400"} py-3 px-8 font-semibold hover:bg-white/10 hover:cursor-pointer rounded-sm items-center flex gap-4 w-[244px] h-fit`}>
        <div className="w-fit h-fit">
            {props.icon}
        </div>
        <div>
            {props.text}
        </div>
    </div>
  )
}

export default SidebarItem