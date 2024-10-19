import Image from "next/image"
import logo from "@/assets/logo.svg"

export default function SpinerLogo({ size }: { size: number }) {
  return (
    <>
      <div className="animate-spin " style={{ width: `${size}px` }}>
        {/* <Image src={logo} alt="logo" className={`w-[${size}px] h-[${size}px]`} /> */}
        {/* 테일윈드 퍼지 과정에서 문제 발생함 이렇게 쓸려면 따로 전체설정 건들여야 해서 간단한건 인라인으로 처리함 */}
        {/* 나머지 css 는 테일윈드로 처리해도 둘다 사용가능 하니깐 문제 x  */}
        <Image src={logo} alt="logo" />
      </div>
    </>
  )
}