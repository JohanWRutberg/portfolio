import React from "react";
import { motion } from "framer-motion";
/* import { Experience } from "../typings";
import { urlFor } from "../sanity"; */

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex mt-20 flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/img/Midsummer.jpg"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Employed at...</h4>
        <p className="font-bold text-2xl mt-1">WORKING</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="/img/HTML1.png" alt="" />
          <img className="h-10 w-10 rounded-full" src="/img/CSS1.png" alt="" />
          <img className="h-10 w-10 rounded-full" src="/img/JS1.png" alt="" />
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  );
}
