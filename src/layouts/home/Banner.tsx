"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
export default function Banner({ children }: { children: ReactNode }) {
  /* ------------------------------- animations start ------------------------------- */
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  // Zoom
  const animateZoom = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  // Opacity
  const animateOpacity = useTransform(
    scrollYProgress,
    [0.7, 1],
    ["100%", "0%"],
  );

  // Depending on the opacity, the z-index of the component will change, allowing the user to interact with the component wrapped.
  const [opacity, setOpacity] = useState<string>();
  animateOpacity.onChange((latest) => {
    setOpacity(latest);
  });

  /* ----------------------------------- animations end ---------------------------------- */

  return (
    <section className="relative">
      <motion.section
        className={`absolute flex h-[120vh] w-full items-center justify-center overflow-hidden bg-gradient-to-tr from-dark to-dark-soft px-10 pb-32 ${opacity !== "0%" ? "z-10" : "z-0"}`}
        ref={ref}
        style={{ opacity: animateOpacity }}
      >
        <motion.p
          className=" text-center text-6xl uppercase tracking-widest text-gray"
          style={{ scale: animateZoom }}
        >
          Frase de venta
        </motion.p>
      </motion.section>
      {children}
    </section>
  );
}
