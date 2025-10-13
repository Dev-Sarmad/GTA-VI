import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export const LuciaVideo = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.set(".lucia", { marginTop: "-60vh", opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".lucia",
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    });
    tl.to(".lucia", { opacity: 1, duration: 1, ease: "power1.inOut" });
    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          ease: "power1.inOut",
          duration: 3,
        },
        "<"
      );
    };
  });
  return (
    <section className="lucia">
      <div className="h-dvh">
        <video
          src="/videos/output2.mp4"
          muted
          ref={videoRef}
          className="size-full object-cover second-vd"
          preload="auto"
          style={{ objectPosition: "15% 0%" }}
          playsInline
        ></video>
      </div>
    </section>
  );
};
