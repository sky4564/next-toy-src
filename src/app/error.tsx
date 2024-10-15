"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootError() {
  const router = useRouter()

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => clearTimeout(redirectTimer)
  }, [router])

  return (
    <div>
      <h1>
        이건 루트에러 페이지별 에러 작성 안 해놓으면 루트에러로 떨어짐
      </h1>
      <p>3초 후에 홈페이지로 자동 이동합니다...</p>
    </div>
  )
}