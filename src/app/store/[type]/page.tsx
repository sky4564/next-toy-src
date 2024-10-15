import MenuList from "@/app/components/MenuList"

type FoodType = '양식' | '중식' | '한식'


async function getTime() {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000))
}
async function getTime2() {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000))
}

export default async function Store({ params }: { params: { type: string } }) {



  await Promise.all([getTime(), getTime2()])

  const decodedType = decodeURIComponent(params.type)
  const type = decodedType as FoodType

  return (
    <div>
      <h1>음식점 페이지</h1>
      <MenuList type={type} />
    </div>
  )
}