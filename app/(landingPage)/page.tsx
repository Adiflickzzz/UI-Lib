import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <LoginButton>
        <Button>Login</Button>
      </LoginButton>
    </div>
  );
}
