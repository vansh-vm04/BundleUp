interface Props{
    loading:boolean
}

const Loading = (props:Props) => {
  return (
    <div className={`${!props.loading && 'hidden'} w-screen bg-transparent h-screen fixed z-[56] flex items-center justify-center`}>
        <div className="w-[64px] animate-spin transition-transform transform-3d duration-100 ease-in-out h-[64px] bg-transparent rounded-full border-r-8 border-l-8 border-gray-700"></div>
    </div>
  )
}

export default Loading