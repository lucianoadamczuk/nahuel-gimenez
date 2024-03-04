import { tv } from "tailwind-variants";

export const StyleButtton = tv({
  base: "w-full lg:w-fit py-3 bg-highlight capitalize text-light rounded-sm text-center uppercase tracking-widest cursor-pointer active:scale-95",
  variants: {
    size: {
      small: " px-3 text-xs",
      normal: "px-5 text-sm",
    },
  },

  defaultVariants: {
    size: "normal",
  },
});
