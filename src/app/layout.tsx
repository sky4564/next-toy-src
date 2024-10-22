import { Metadata } from "next";
import '@/app/globals.css';

// import SideBar from "./components/ui/sideBar/SideBar";
// import NavBar from "@/app/components/ui/navigation/NavBar"
import SideBarVer2 from "./components/ui/sideBar/SideBarVer2";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (

    //todo : add navBar and listBar
    // 루트레이아웃에서 뿌려주기 listBar 는 기획에 따라 바뀔 수 있고
    // 네브바는 계속 보지않을까.. ?     

    // todo: root layout이 있으니깐 이거 ..  로딩만 보여주기가 힘드네 그냥 z- index 땡겨서 쓰는건 ? 
    <html lang="en">
      <body>
        {/* <NavBar></NavBar>
        <div className="flex">
          <SideBar></SideBar>
          {children}
        </div> */}
        <div className="flex flex-row">
          <SideBarVer2 />
          {children}
        </div>

      </body>
    </html>
  );
}