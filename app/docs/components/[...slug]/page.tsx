"use client";

import { useParams } from "next/navigation";

const PremiumPage = () => {
  const { slug } = useParams();
  return <div>{slug}</div>;
};

export default PremiumPage;
