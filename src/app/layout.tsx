import { Metadata } from "next";
import '@/app/globals.css';
import NavBar from "@/app/components/ui/navigation/NavBar"

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
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}