"use client";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

const PremiumPage = () => {
  const { slug } = useParams();
  return <div>{slug}</div>;
};

export default PremiumPage;
