import MenuList from "@/app/components/MenuList"
import { Suspense } from "react";

export default async function Store() {

  return (
    <div>
      <h1>음식점 페이지</h1>
      <Suspense fallback={<h1> is fallback plz wait ...</h1>}>
        <MenuList type={'중식'} />
      </Suspense>
    </div>
  )
}