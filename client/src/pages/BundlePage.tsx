import PlusIcon from "../components/icons/PlusIcon"
import BundleCard from "../components/ui/BundleCard"
import Button from "../components/ui/Button"

const bundles = [
  {
    title:"New Bundle",
    onClick:()=>console.log('bundle')
  }
]

const BundlePage = () => {
  return (
    <div className="bg-black/60 items-center ml-[284px] max-lg:m-0 max-md:m-0 flex flex-col w-screen h-screen">
      <div className="w-full py-8 px-10 max-md:px-2 flex max-md justify-between items-center">
        <span className="text-white text-3xl font-bold items-center justify-center">Bundles</span>
        <div className="flex gap-4 items-center justify-center">
          <Button
           onClick={()=>console.log('')}
            text="Add Bundle"
            variant="primary"
            startIcon={<PlusIcon />}
          />
        </div>
      </div>
      <div className="grid items-center overflow-y-scroll hide-scrollbar scroll-smooth max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-3 py-6 gap-6">
        {bundles.map((b,i)=>(
          <BundleCard key={i} title={b.title} onClick={b.onClick}/>
        ))}
      </div>
    </div>
  )
}

export default BundlePage