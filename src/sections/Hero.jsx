// Hero.jsx
import gsap from "gsap";
import ComingSoon from "./Comingsoon";
import { useGSAP } from "@gsap/react";
import { useMaskSettings } from "../../constants";
function Hero() {
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } =
    useMaskSettings();
  useGSAP(() => {
    gsap.set(".mask-wrapper", {
      maskPosition: initialMaskPos,
      maskSize: initialMaskSize,
    });
    gsap.set(".mask-logo", { marginTop: "-100vh", opacity: 0 });
    gsap.set(".entrance-message", { marginTop: "0vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        scrub: 2.5,
        end: "+=200%",
        pin: true,
      },
    });
    tl.to(".fade-out", { opacity: 0, ease: "power1.inOut" })
      .to(".scale-out", { scale: 1, ease: "power1.inOut" })
      .to(".mask-wrapper", { maskSize, ease: "power1.inOut" }, "<")
      .to(".mask-wrapper", { opacity: 0 })
      .to(".overlay-logo", { opacity: 1 }, "<")
      .to(
        ".entrance-message",
        {
          duration: 1,
          opacity: 1,
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        },
        "<"
      );
  });
  return (
    <section className="hero-section">
      <div className="size-full mask-wrapper">
        <img
          src="/images/hero-bg.webp"
          alt="Hero Background"
          className="scale-out"
        />
        <img
          src="/images/hero-text.webp"
          alt="Hero Logo"
          className="title-logo fade-out"
        />
        <img
          src="/images/watch-trailer.png"
          alt="Watch Trailer"
          className="trailer-logo fade-out"
        />
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="Play Icon" className="w-7 ml-7" />
        </div>
      </div>
      <div>
        <img
          src="/images/big-hero-text.svg"
          alt="Big Hero Text"
          className="size-full object-cover mask-logo"
        />
      </div>
      <div className="fake-logo-wrapper">
        <img
          src="/images/big-hero-text.svg"
          alt="Fake Logo"
          className="overlay-logo"
        />
      </div>
      <ComingSoon />
    </section>
  );
}

export default Hero;
