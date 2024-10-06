import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import LoginButton from "./auth/LoginButton";
export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-semibold text-xl md:text-2xl">UI LIBRARY</div>
      <div className="hidden md:flex items-center gap-5">
        <LoginButton>
          <Button
            className="rounded-full md:text-sm px-4 md:px-7 font-bold"
            size="sm"
          >
            Login
          </Button>
        </LoginButton>
        <FaInstagram className="size-6" />
        <FaGithub className="size-6" />
      </div>
    </div>
  );
};
