// CopyButton.tsx
"use client";

import { useState } from "react";

interface CopyButtonProps {
  code: string;
}

export default function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Remove unnecessary escape characters
    const formattedCode = code.replace(/\\``/g, "");

    navigator.clipboard
      .writeText(formattedCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
