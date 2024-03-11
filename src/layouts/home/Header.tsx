import { IconArrow } from "@/icons";
import { StyleIcon, StyleTitle } from "@/styles";
import { content } from "../../../public/locales/es";

export default function Header() {
  return (
    <header
      className="container grid place-items-center gap-5 gap-x-20 pt-32  md:grid-cols-2 "
      id="home"
    >
      <article className=" space-y-5">
        {/* title and text */}
        <article className="space-y-2">
          <h3 className={StyleTitle()}>
            {content.header.title}
            <span className=" whitespace-nowrap rounded-[30px] bg-gradient-to-r from-primary to-primary-light px-2 text-light">
              {content.header.highlight}
            </span>{" "}
            {content.header["title-2"]}
          </h3>

          <p dangerouslySetInnerHTML={{ __html: content.header.text }}></p>
        </article>
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

        {/* video mobile*/}
        <video
          autoPlay
          muted
          loop
          src="/assets/videos/home/header-mobile.mp4"
          className=" h-96 w-full object-cover opacity-20 lg:hidden"
        ></video>
        {/* video desktop*/}
        <video
          autoPlay
          muted
          loop
          src="/assets/videos/home/header-desktop.mp4"
          className=" hidden h-full w-full object-cover opacity-20 lg:block"
        ></video>

        {/* phrase */}
        <div className=" absolute bottom-0 right-0 w-2/4 rounded-tl-xl bg-light p-5 text-center text-xs">
          {/* phrase */}
          <p dangerouslySetInnerHTML={{ __html: content.header.phrase }}></p>
        </div>
      </article>
    </header>
  );
}
