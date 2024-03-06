"use client";
import { StyleTitle } from "@/styles";
import { motion } from "framer-motion";
import { content } from "../../../public/locales/es";

export default function About() {
  return (
    <div className="container space-y-2 py-20 " id="about">
      {/* main */}
      <motion.section
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" rounded-t-3xl bg-gradient-to-tr from-gray  to-transparent"
      >
        <div className="container py-20">
          <h3 className={StyleTitle()}> {content.about.title} </h3>
          <p className=" lg:w-1/2" dangerouslySetInnerHTML={{__html: content.about.text}}></p>
        </div>
      </motion.section>

      <section className="grid gap-2 lg:grid-cols-3">
        {/* box 1 */}
          <div className=" bg-gray p-5">
            <p dangerouslySetInnerHTML={{__html: content.about.box1}}></p>
          </div>

          {/* box 2 */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className=" bg-gradient-to-tr from-primary to-primary-light p-5 text-light "
          >
            <p dangerouslySetInnerHTML={{__html: content.about.box2}}></p>
          </motion.div>

        {/* Empty box used to occupy space and only appears on desktop */}
        <div className="hidden lg:block"></div>

        {/* box 3 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" rounded-b-3xl bg-gray p-5 text-center lg:col-span-2"
        >
          <p dangerouslySetInnerHTML={{__html: content.about.box3}}></p>
        </motion.div>

        {/* Empty box used to occupy space and only appears on desktop */}
        <div className="hidden lg:block"></div>

        {/* box 4 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" flex justify-evenly p-5 lg:col-span-2"
        >
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </motion.div>
      </section>
    </div>
  );
}
