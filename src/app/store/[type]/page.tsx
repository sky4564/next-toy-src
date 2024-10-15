import MenuList from "@/app/components/MenuList"
import GetTime from "@/app/components/GetTime"
import GetTime2 from "@/app/components/GetTime2"
import { Suspense } from "react"

type FoodType = '양식' | '중식' | '한식'




export default async function Store({ params }: { params: { type: string } }) {
  const decodedType = decodeURIComponent(params.type)
  const type = decodedType as FoodType

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