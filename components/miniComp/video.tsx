"use client";
import React, { useRef, useEffect } from "react";

interface LoopVideoProps {
  src: string;
  className?: string;
}

const LoopVideo: React.FC<LoopVideoProps> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      autoPlay
      playsInline
    />
  );
};

export default LoopVideo;
