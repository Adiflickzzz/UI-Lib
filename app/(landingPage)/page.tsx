import LoginButton from "@/components/auth/LoginButton";
import { MainSection } from "@/components/mainSection";
import { Navbar } from "@/components/navbar";
import { Sidenav } from "@/components/sidenav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Wrapper } from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <div className="flex py-24 px-12 gap-16">
        <div className="">
          <Sidenav />
        </div>
        <div>
          <Separator orientation="vertical" className="" />
        </div>
        <div className="flex-1 -mt-1">
          <MainSection
            header="Input"
            description="Displays a form input field or a component that looks like an input field."
          />
        </div>
      </div>
    </Wrapper>
  );
}
