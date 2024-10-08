import LoginButton from "@/components/auth/LoginButton";
import { MainSection } from "@/components/mainSection";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Wrapper } from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div>
        <Navbar />
      </div>
      <div className="flex m-20 gap-16">
        <div className="">
          <Sidebar />
        </div>
        <div>
          <Separator orientation="vertical" className="" />
        </div>
        <div className="flex-1 -mt-1">
          <MainSection
            header="Awwwards Side Menu"
            description="Rebuild an Awwwards Side Menu with Framer motion and Nextjs."
          />
        </div>
      </div>
    </Wrapper>
  );
}
