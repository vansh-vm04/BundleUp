import type { ReactElement } from "react"

interface ButtonProps{
    variant: "primary" | "secondary",
    text:string,
    startIcon?:ReactElement,
    onClick?: ()=>void;
    type?:'submit' | 'reset' | 'button',
    minimize?:boolean
}
const variantTypes = {
  "primary":"bg-primary hover:bg-blue-500 shadow-xl w-fit h-fit hover:cursor-pointer font-semibold rounded-md px-4 py-2 max-md:(px-2 py-1 text-md font-normal) text-white flex item-center justify-center gap-1",
  "secondary":"bg-secondary hover:bg-gray-200 shadow-xl w-fit h-fit hover:cursor-pointer font-semibold rounded-md px-4 py-2 text-black flex item-center max-md:(px-2 py-1 text-md font-normal) justify-center gap-1"
}
const Button = (props:ButtonProps) => {
  return (
    <button type={props.type} onClick={()=>props.onClick?.()} className={variantTypes[props.variant]}>
      {props?.startIcon}
      <div className={`${props.minimize && 'max-sm:hidden'} w-fit h-fit`}>{props.text}</div>
      </button>
  )
}

export default Button