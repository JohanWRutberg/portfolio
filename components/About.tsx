import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

      <motion.img
        initial={{
          x: -200
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/img/Selfie.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg mt-20 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] object-cover"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          This is my <span className="underline decoration-[#00ff73]/50">background</span>
        </h4>
        <p className="text-base">
          Tempor commodo ullamcorper a lacus vestibulum sed. Amet venenatis urna cursus eget nunc scelerisque viverra.
          Orci nulla pellentesque dignissim enim sit amet venenatis urna. Tempor orci dapibus ultrices in. Posuere ac ut
          consequat semper viverra nam libero justo. Id interdum velit laoreet id donec ultrices tincidunt arcu. Integer
          eget aliquet nibh praesent tristique magna sit amet purus. Commodo sed egestas egestas fringilla. Aenean vel
          elit scelerisque mauris. Mattis pellentesque id nibh tortor id. Amet venenatis urna cursus eget nunc
          scelerisque viverra mauris in. Elit at imperdiet dui accumsan sit amet nulla facilisi.
        </p>
      </div>
    </motion.div>
  );
}
