interface Props{
    loading:boolean
}

const Loading = (props:Props) => {
  return (
    <div className="fixed z-[58] bottom-1/2 bg-transparent w-fit h-fit p-1 rounded-full">
        <div className={`${!props.loading && 'hidden'} w-[40px] h-[40px] animate-spin transition-transform transform-3d duration-100 ease-in-out  bg-transparent border-dotted rounded-full border-r-8 border-t-8 border-blue-500`}></div>
        </div>
  )
}

export default Loading