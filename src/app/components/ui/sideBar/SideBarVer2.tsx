import Image from "next/image"
import logo from "@/assets/logo.svg"

export default function SideBarVer2() {
  function SideItem({ src, title }: { src: string, title: string }) {
    return (
      <div className=" bg-green-400 mt-10 w-fit h-fit flex flex-col items-center">
        <Image
          src={src}
          alt="home logo"
          width={30}  // 원하는 너비
          height={50} // 원하는 높이
          className="object-contain" // 이미지 비율 유지
        />
        <p className=" text-center text-sm">{title}</p>
      </div>
    )
  }


  return (
    <div className=" bg-gray-600 w-20 h-fit items-center flex flex-col gap-11">

      <div className=" bg-green-400 mt-10 w-10 h-10">
        <Image src={logo} alt="homelogo" />
      </div>

      <SideItem src={logo} title="홈 화면"></SideItem>
      <SideItem src={logo} title="지도 화면"></SideItem>
      <SideItem src={logo} title="커뮤니티"></SideItem>
      <SideItem src={logo} title="저장목록"></SideItem>

    </div>
  )
}