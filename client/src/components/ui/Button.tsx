import type { ReactElement } from "react"

interface ButtonProps{
    variant: "primary" | "secondary",
    text:string,
    startIcon?:ReactElement,
    onClick: ()=>void;
}
const variantTypes = {
  "primary":"bg-primary hover:bg-blue-500 shadow-xl w-fit h-fit hover:cursor-pointer font-semibold rounded-md px-4 py-2 text-white flex item-center justify-center gap-1",
  "secondary":"bg-secondary hover:bg-gray-200 shadow-xl w-fit h-fit hover:cursor-pointer font-semibold rounded-md px-4 py-2 text-black flex item-center justify-center gap-1"
}
const Button = (props:ButtonProps) => {
  return (
    <button onClick={()=>props.onClick()} className={variantTypes[props.variant]}>
      {props?.startIcon}
      {props.text}
      </button>
  )
}

export default Button