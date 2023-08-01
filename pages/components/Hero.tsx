import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <div className=" transition-all ease-in-out mx-auto flex flex-col h-[85%] justify-center place-items-center ">
      <div className="relative w-[16rem] h-1">
        {" "}
        <Image
          src={"/shaka.png"}
          alt="shaka"
          width={50}
          height={50}
          className="absolute right-0 bottom-0 animate-bounce opacity-70 "
        />
      </div>
      <h1 className="text-6xl md:text-9xl font-chicle text-secondary">
        cop
        <span className="relative font-chicle text-primary before:content-['ı'] before:absolute before:text-secondary">
          i
        </span>
        <span className="text-primary ">.</span>r
        <span className="relative font-chicle text-primary before:content-['ı'] before:absolute before:text-secondary">
          i
        </span>
        te
      </h1>
      <p className="mx-auto w-[85%] lg:w-[80%] text-foreground font-darkerGrotesque text-xl md:text-[3rem] my-10 leading-none lg:leading-10 transition-[all_0.5_ease-in-out] text-center">
        AI generated social media marketing copy for your product or service
        in seconds.
        <br />
      </p>
    </div>
  );
}

export default Hero;
