export default function SideBar() {
  function SideItem() {
    return (
      <div className="h-20  bg-gray-600 flex items-center justify-center  rounded-2xl w-[90%]">
        <p className="font-bold text-xl"> 가게로 주문하기 </p>
      </div>
    )
  }

  return (
    <>
      <nav className="flex flex-col h-[calc(100vh-152px)] w-96  bg-green-400 gap-6 items-center justify-evenly">
        <SideItem />
        <SideItem />
        <SideItem />
      </nav>
    </>
  )
}