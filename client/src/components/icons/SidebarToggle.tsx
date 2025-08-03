import { useSidebar } from "../../hooks/useSidebar"

const SidebarToggle = () => {
    const sidebar = useSidebar()
  return (
    <div onClick={()=>sidebar?.toggle()} className="hover:bg-white/20 hover:cursor-pointer p-1 rounded-sm w-fit h-fit">
        <svg className="bi bi-layout-sidebar size-6 fill-white" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2V2z"/></svg>
    </div>
  )
}

export default SidebarToggle