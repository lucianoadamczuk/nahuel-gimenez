"use client";
import { StyleTitle } from "@/styles";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container space-y-2 py-20 " id="about">
      {/* main */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" rounded-r-3xl rounded-t-3xl bg-gradient-to-tr from-gray  to-transparent"
      >
        <div className="container py-20">
          <h3 className={StyleTitle()}>Acerca de nosotros</h3>
          <p className=" lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            magnam itaque nemo distinctio repudiandae architecto laboriosam esse
            dolorum voluptatum aliquam a, recusandae quia placeat illum velit
            deleniti excepturi voluptas error.
          </p>
        </div>
      </motion.section>

      <section className="grid gap-2 lg:grid-cols-2">
        {/* box 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-2"
        >
          <div className=" bg-gray p-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, saepe.
            </p>
          </div>

          {/* box 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className=" bg-gradient-to-tr from-primary to-primary-light p-5 text-light "
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, saepe.
            </p>
          </motion.div>
        </motion.div>

        {/* Empty box used to occupy space and only appears on desktop */}
        <div className="hidden lg:block"></div>

        {/* box 3 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" rounded-b-xl bg-gray p-5 text-center"
        >
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
            saepe.
          </p>
        </motion.div>
        {/* Empty box used to occupy space and only appears on desktop */}
        <div className="hidden lg:block"></div>

        {/* box 4 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className=" flex justify-evenly p-5"
        >
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </motion.div>
      </section>
    </div>
  );
}
