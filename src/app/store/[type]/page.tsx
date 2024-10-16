import MenuList from "@/app/components/MenuList"
import GetTime from "@/app/components/GetTime"
import GetTime2 from "@/app/components/GetTime2"
import { Suspense } from "react"

type FoodType = '양식' | '중식' | '한식'




export default async function Store({ params }: { params: { type: string } }) {
  const decodedType = decodeURIComponent(params.type)
  const type = decodedType as FoodType
  // 만약 하게 된다면 여기서 지도 뿌려주고 해야할텐데 = 비동기 작업 and 시간소요 많음
  // 지도부분 suspense 적용해서 fallback 으로 shadcn 스피너나 같은거 넣어주고
  // (p.s 로딩 스피너 하나 쓰고 shadcn 썻다고 하면 너무 염치없나.. ? ㅋㅋ)
  // 지도가 로드되기전 다른것은 떠있어서 UX 개선
  return (
    <div>
      <h1>음식점 페이지</h1>
      <MenuList type={type} />

      <Suspense fallback={<div> is loading...</div>}>
        <GetTime />
      </Suspense>

      <br></br>

      <Suspense fallback={<div> is loading..... !!</div>}>
        <GetTime2 />
      </Suspense>
    </div>

  )
}