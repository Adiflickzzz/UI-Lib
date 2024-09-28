"use client";
import { useRouter } from "next/navigation";
import Module from "module";
import { redirect } from "next/dist/server/api-utils";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "Modal" | "redirect";
  asChild?: boolean;
}

const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "Modal") {
    return <span>Pending</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default LoginButton;
