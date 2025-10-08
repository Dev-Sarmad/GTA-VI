import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Video = () => {
  const videoRef = useRef(null);
  useGSAP(() => {
    gsap.set(".first-vd-wrapper", { marginTop: "-150vh", opacity: 0 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200% top",
        scrub: true,
        pin: true,
      },
    });
    //hides the hero section and shows the video section
    tl.to(".hero-section", { delay: 0.5, opacity: 0, ease: "power1.inOut" });
    tl.to(".first-vd-wrapper", {
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
    });
    //getting the metadata of the video for the animation because we need the duration of fully loaded video
    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        {
          currentTime: videoRef.current.duration,
          duration: 3,
          ease: "power1.inOut",
        },
        "<"
      );
    };
  }, []);
  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          src="/videos/output1.mp4"
          ref={videoRef}
          muted
          preload="auto"
          playsInline
          className="first-vd"
        ></video>
      </div>
    </section>
  );
};
