import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth"
import LogoutIcon from "../icons/LogoutIcon"

const ThemeType = {
  "dark":"bg-black text-white rounded-md border-blue-900 border-1 flex items-center w-[264px] justify-left px-6 gap-4 py-4",
  "light":"bg-white text-black rounded-md flex items-center w-[244px] justify-left px-6 gap-4 py-4"
}

const UserCard = () => {
  const [username, setusername] = useState<string>('User');
  const {logOut,verify} = useAuth();
  const getUser = async () =>{
    const user = await verify();
    if(user.loggedIn){
      setusername(user.username);
    }
  }
  
  useEffect(() => {
    getUser()
  }, [])
  
  return (
    <div className={ThemeType["dark"]}>
        <div className="bg-primary text-black text-xl rounded-full flex items-center justify-center p-4 w-12 h-12">{username.split('')[0].toUpperCase()}</div>
        <span className="truncate w-[110px]">{username.toLocaleUpperCase()}</span>
        <LogoutIcon onClick={()=>logOut()}/>
    </div>
  )
}

export default UserCard