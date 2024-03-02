import { Card } from "@/components";
import { StyleTitle } from "@/styles";

interface Props {}
export default function Testimonies({}: Props) {
  return (
    <section className="container grid place-items-center gap-10 py-20 lg:grid-cols-5">
      <section className=" space-y-5 lg:col-span-3">
        {/* text container */}
        <div>
          <h3 className={StyleTitle()}>Testimonios</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            nulla placeat sunt! Sed neque iusto, perspiciatis nisi tempora quos
            quam ab dicta, omnis adipisci molestiae, unde cumque incidunt
            veritatis inventore.
          </p>
          <div className=" mt-10 h-1 w-full bg-gradient-to-l from-gray to-transparent"></div>
        </div>

        {/* cards container */}
        <article className="relative">
          {/* faded top */}
          <div className="absolute top-0 h-20 w-full bg-gradient-to-b from-light to-transparent  "></div>
          {/* cards */}
          <div className="  grid h-[60vh] place-items-center  gap-40 overflow-y-scroll py-20">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          {/* faded bottom */}
          <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-light to-transparent  "></div>
        </article>
      </section>

      <img
        src="/assets/images/home/testimonies-desktop.jpg"
        alt=""
        className="hidden h-[120vh] h-full w-full object-cover opacity-20 lg:col-span-2 lg:flex"
        loading="lazy"
      />
    </section>
  );
}
