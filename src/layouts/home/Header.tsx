import { IconArrow } from "@/icons";
import { StyleIcon, StyleTitle } from "@/styles";

interface Props {
  title: string
  highlight: string
  title2: string
  text: string
  phrase: string
}
export default function Header({title, highlight, title2, text, phrase}: Props) {
  return (
    <header
      className="container grid place-items-center gap-5 gap-x-20 pt-32  md:grid-cols-2 "
      id="home"
    >
      <article className=" space-y-5">
        {/* title and text */}
        <article className="space-y-2">
          <h3 className={StyleTitle()}>
            {title} {" "}
            <span className=" rounded-[30px] bg-gradient-to-r from-primary to-primary-light px-2 text-light">
              {highlight}
            </span>{" "}
            {title2}
          </h3>

          <p dangerouslySetInnerHTML={{__html: text}}></p>
        </article>

        {/* Decorative box */}
        <div className="absoulte opacity relative inset-0 h-40 w-full rounded-2xl bg-gradient-to-br from-dark to-dark-soft/95 text-gray"></div>
      </article>

      {/* button + video + phrase */}
      <article className="relative h-full min-h-96 w-full  rounded-lg  bg-dark ">
        {/* button */}
        <a
          href="#contact"
          className="absolute z-10 w-fit cursor-pointer rounded-br-xl bg-light p-2"
        >
          <div className="rounded-xl bg-gradient-to-br from-primary to-primary-light">
            <IconArrow
              className={StyleIcon({
                size: "lg",
                color: "light",
                className: ` duration-300 hover:rotate-45`,
              })}
            />
          </div>
        </a>

        {/* video */}
        <video
          autoPlay
          muted
          loop
          src="/assets/videos/home/header-desktop.mp4"
          className=" h-full w-full object-cover opacity-20"
        ></video>

        {/* phrase */}
        <div className=" absolute bottom-0 right-0 w-2/4 rounded-tl-xl bg-light p-5 text-center text-xs">
          {/* phrase */}
          <p dangerouslySetInnerHTML={{__html: phrase}}></p>
        </div>
      </article>
    </header>
  );
}
