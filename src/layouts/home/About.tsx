"use client";
import { StyleTitle } from "@/styles";
import { motion } from "framer-motion";
import { content } from "../../../public/locales/es";

export default function About() {
  const initial = { opacity: 0, scale: 0 };
  const whileInView = { opacity: 1, scale: 1 };
  const transition = { duration: 0.6, type: "spring" };

  return (
    <div className="container space-y-2 py-20 " id="about">
      {/* main */}
      <motion.section
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        className=" rounded-t-3xl bg-gradient-to-tr from-gray  to-transparent"
      >
        <div className=" p-10">
          <h3 className={StyleTitle()}> {content.about.title} </h3>
          <p
            className=" lg:w-1/2"
            dangerouslySetInnerHTML={{ __html: content.about.text }}
          ></p>
        </div>
      </motion.section>

      <section className="grid gap-2 lg:grid-cols-3">
        {/* box 1 */}
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          className=" bg-gray p-10 text-center"
        >
          <p dangerouslySetInnerHTML={{ __html: content.about.box1 }}></p>
        </motion.div>

        {/* box 2 */}
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          className=" flex items-center bg-gradient-to-tr from-primary to-primary-light p-10 text-center text-light "
        >
          <p dangerouslySetInnerHTML={{ __html: content.about.box2 }}></p>
        </motion.div>

        {/* Empty box used to occupy space and only appears on desktop */}
        <div className="hidden lg:block"></div>

        {/* box 3 */}
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          className=" rounded-b-3xl bg-gray p-10 text-center lg:col-span-2"
        >
          <p dangerouslySetInnerHTML={{ __html: content.about.box3 }}></p>
        </motion.div>

        {/* Empty box used to occupy space and only appears on desktop */}
        <div className="hidden lg:block"></div>

        {/* box 4 */}
        <motion.div
          initial={initial}
          whileInView={whileInView}
          transition={transition}
          className=" flex flex-wrap justify-around gap-5 p-5 lg:col-span-2"
        >
          {content.about.box4.map((item) => (
            <p key={item} className="animate-pulse font-bold uppercase">
              {item}
            </p>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
