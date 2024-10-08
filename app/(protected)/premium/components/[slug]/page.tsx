"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const { slug } = useParams(); // Extract slug from params

  return <div>Component: {slug}</div>;
};

export default Page;
