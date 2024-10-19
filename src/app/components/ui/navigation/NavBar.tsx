"use client"
import Image from 'next/image'
import logo2 from '@/assets/logo.svg'

import { useRouter } from 'next/navigation'

export default function NavBar() {
  const navItem = ['home', 'store', 'submit']
  const router = useRouter()


  const changePage = (page: string) => () => {
    switch (page) {
      case 'home': router.push('/'); break;
      case 'store': router.push('/store'); break;
      case 'submit': router.push('/submit'); break;
    }
  }

  // function changePage(page: string) {
  //   return () => {
  //     switch (page) {
  //       case 'home': router.push('/'); break;
  //       case 'store': router.push('/store'); break;
  //       case 'submit': router.push('/submit'); break;
  //     }
  //   }
  // }

  return (
    <nav className=" flex items-center justify-between p-4 text-xl bg-blue-500 ">
      <Image className="" src={logo2} alt='logoimg' width={100}></Image>
      <div className="text-[65px] flex">
        {navItem.map((x, i) => <p onClick={changePage(x)} key={i} className="mr-40 text-white hover:text-8xl">{x}</p>)}
      </div>
    </nav>
  )
}