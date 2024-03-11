import { tv } from "tailwind-variants";

export const StyleIcon = tv({
  variants: {
    size: {
      sm: "size-6",
      md: "size-12",
      lg: "size-16",
      xl: "size-20",
    },
    color: {
      light: "text-light",
      dark: "text-dark",
    },
  },
});
