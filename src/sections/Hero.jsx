import HeroText from "../components/HeroText";
import HeroBackground from "../components/HeroBackground";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex items-center justify-center min-h-screen overflow-hidden c-space">
      <div className="relative z-10 w-full">
        <HeroText />
      </div>
      <HeroBackground />
    </section>
  );
};

export default Hero;
