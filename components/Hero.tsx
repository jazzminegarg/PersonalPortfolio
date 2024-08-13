import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { MacbookScroll } from "./ui/macbook-scroll";
import { FlipWords } from "./ui/flipwords";

const Hero = () => {
  return (
    <div className="pb-20">
      {/* *
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      <FlipWords className="text-center py-5 text-[40px] md:text-5xl lg:text-4xl" words={["HEY THERE!!","Hello",          // English"Hola",           // Spanish
  "Bonjour",        // French
  "Ciao",           // Italian
  "Hallo",          // German
  "こんにちは",       // Japanese
  "안녕하세요",       // Korean
  "नमस्ते"]} />
      <MacbookScroll showGradient={true} title={"Welcome to My Profile"} src="/image.png" />
    </div>
  );
};

export default Hero;