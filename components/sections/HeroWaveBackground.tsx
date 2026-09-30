"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Ignite Visibility hero uses a full-bleed looping wave MP4 (particle mesh animation).
 * @see https://ignitevisibility.com/ — `.c-hero-outer video`
 */
export function HeroWaveBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;

    const play = () => {
      video.play().catch(() => {
        /* autoplay policy */
      });
    };

    play();
    video.addEventListener("loadeddata", play);
    return () => video.removeEventListener("loadeddata", play);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div
        className="hero-ignite__video hero-ignite__video--poster"
        style={{ backgroundImage: "url(/hero/hero-bg.png)" }}
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="hero-ignite__video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero/hero-bg.png"
      aria-hidden
    >
      <source media="(max-width: 740px)" src="/hero/wave-loop-mobile.mp4" type="video/mp4" />
      <source src="/hero/wave-loop.mp4" type="video/mp4" />
    </video>
  );
}
