import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["I'm Johan Rutberg, plain and simple", "A-developer-who-loves-Coffee.tsx", "<AndLovesToCode />"],
    loop: true,
    delaySpeed: 1500
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="/img/Selfie2.JPEG" alt="" /> */}
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="/img/Selfie2.JPEG"
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <div className="z-20 relative">
        <motion.h2
          initial={{
            opacity: 0
          }}
          animate={{
            scale: [1],
            opacity: [0.2]
          }}
          transition={{
            duration: 2.5
          }}
          className="text-sm uppercase text-[#00ff73] pb-2 tracking-[15px] animate-pulse"
        >
          Web developer
        </motion.h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">
            {text}
            <Cursor cursorColor="#00ff73" />
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
