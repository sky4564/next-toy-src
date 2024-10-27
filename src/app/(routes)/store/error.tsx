"use client"

import { useEffect } from "react"
import { useRouter } from 'next/navigation'

export default function StoreError() {
  const router = useRouter()
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/store')
    }, 3000)
    return () => clearTimeout(redirectTimer)
  })
  return (
    <>
      <h1>
        상점을 찾을수 없숴용 ㅠㅠ
        is store  error !!!
      </h1>
      <p>
        여기서는 활용할수있는 방법이
        루트 에러 페이지에서는 홈으로 리다이렉트 했다면
        이런 store 같은 페이지에서는 즉 어떤 섹션에 들어와있다면
        섹션의 루트로 가는게 좋을꺼같다.
      </p>
    </>
  )
}