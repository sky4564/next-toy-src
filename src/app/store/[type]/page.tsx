import MenuList from "@/app/components/MenuList"

type FoodType = '양식' | '중식' | '한식'

export default function Store({ params }: { params: { type: string } }) {

  const decodedType = decodeURIComponent(params.type)
  const type = decodedType as FoodType

  console.log(type)

  return (
    <div>
      <h1>음식점 페이지</h1>
      <MenuList type={type} />
    </div>
  )
}