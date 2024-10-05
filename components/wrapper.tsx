import React from "react";

interface Wrapper {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: Wrapper) => {
  return <div className="py-12 px-20">{children}</div>;
};
