interface Props{
  onClick:()=>void
}

const LogoutIcon = (props:Props) => {
  return (
    <div onClick={props.onClick} className="p-0.5 rounded-sm hover:cursor-pointer hover:bg-white/20">
    <svg className="size-5 hover:cursor-pointer" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none" stroke="none"/><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"/><path d="M7 12h14l-3 -3m0 6l3 -3"/></svg>
    </div>
  )
}

export default LogoutIcon