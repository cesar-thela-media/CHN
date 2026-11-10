"use client";

/**
 * Hero video. CHN.mp4 opens on a flat daylight shot (0–4s); the approved mock's
 * look is the dusk pool-house shot at ~4–8s. Loop just that shot so the hero
 * always looks like the mock. The poster is the 7.4s frame from the same shot.
 */
import { useEffect, useRef } from "react";

const START = 4.05;
const END = 7.85;

export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const jump = () => {
      if (v.currentTime < START || v.currentTime >= END) v.currentTime = START;
    };
    if (v.readyState >= 1) jump();
    v.addEventListener("loadedmetadata", jump);
    v.addEventListener("timeupdate", jump);
    return () => {
      v.removeEventListener("loadedmetadata", jump);
      v.removeEventListener("timeupdate", jump);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-label="Custom home building showcase video"
    >
      <source src={`${src}#t=${START}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
