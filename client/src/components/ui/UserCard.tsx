interface UserProps{
  username:string,
  theme?:"dark" | "light"
}

const ThemeType = {
  "dark":"bg-black text-white rounded-md flex items-center w-[244px] justify-left px-6 gap-4 py-4",
  "light":"bg-white text-black rounded-md flex items-center w-[244px] justify-left px-6 gap-4 py-4"
}

const UserCard = ({username}:UserProps) => {
  return (
    <div className={ThemeType["dark"]}>
        <div className="bg-primary text-black text-xl rounded-full flex items-center justify-center p-4 w-12 h-12">{username.split('')[0].toUpperCase()}</div>
        <span>{username.toLocaleUpperCase()}</span>
    </div>
  )
}

export default UserCard