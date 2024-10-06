import React from "react";

interface Wrapper {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Wrapper) => {
  return <div className="py-8 px-32">{children}</div>;
};
