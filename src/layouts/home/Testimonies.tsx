import { Card, Carousel } from "@/components";
import { StyleTitle } from "@/styles";

export default function Testimonies() {
  const data = [
    {
      name: "Luciano Adamczuk",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio optio voluptatum nostrum explicabo, dignissimos deserunt eveniet quibusdam iure ratione architecto quas quia, impedit veniam corrupti ab libero id exercitationem!",
      date: "02/03/2024",
    },
    {
      name: "Luciano Adamczuk",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio optio voluptatum nostrum explicabo, dignissimos deserunt eveniet quibusdam iure ratione architecto quas quia, impedit veniam corrupti ab libero id exercitationem!",
      date: "02/03/2024",
    },
    {
      name: "Luciano Adamczuk",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio optio voluptatum nostrum explicabo, dignissimos deserunt eveniet quibusdam iure ratione architecto quas quia, impedit veniam corrupti ab libero id exercitationem!",
      date: "02/03/2024",
    },
    {
      name: "Luciano Adamczuk",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio optio voluptatum nostrum explicabo, dignissimos deserunt eveniet quibusdam iure ratione architecto quas quia, impedit veniam corrupti ab libero id exercitationem!",
      date: "02/03/2024",
    },
  ];

  return (
    <section className="container grid place-items-center gap-10 py-20 lg:grid-cols-5">
      <section className=" grid space-y-5 lg:col-span-3">
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
        <Carousel display={data} />
      </section>

      <img
        src="/assets/images/home/testimonies-desktop.jpg"
        alt=""
        className="hidden h-[120vh] h-full w-full object-cover opacity-60 lg:col-span-2 lg:flex"
        loading="lazy"
      />
    </section>
  );
}
