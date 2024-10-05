import LoginButton from "@/components/auth/LoginButton";
import { Navbar } from "@/components/navbar";
import { Sidenav } from "@/components/sidenav";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Sidenav />
    </Wrapper>
  );
}
