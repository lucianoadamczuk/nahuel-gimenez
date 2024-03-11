import { Carousel } from "@/components";
import { StyleTitle } from "@/styles";
import { content } from "../../../public/locales/es";

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
    <section
      className="container grid place-items-center gap-10 py-20 pt-[40vh] lg:grid-cols-5"
      id="testimonies"
    >
      <section className=" grid space-y-5 lg:col-span-3">
        {/* text container */}
        <div>
          <h3 className={StyleTitle()}> {content.testimonies.title} </h3>
          <p dangerouslySetInnerHTML={{ __html: content.testimonies.text }}></p>
          <div className=" mt-10 h-1 w-full bg-gradient-to-l from-dark/30 to-transparent"></div>
        </div>

        {/* cards container */}
        <Carousel display={data} />
      </section>

      <div
        className=" hidden h-[80vh]  w-full bg-cover bg-center opacity-60 lg:col-span-2 lg:flex"
        style={{
          backgroundImage: "url(/assets/images/home/testimonies-desktop.jpg)",
        }}
      ></div>
      <div
        className=" h-60 w-full bg-cover bg-fixed bg-center opacity-60 lg:hidden"
        style={{
          backgroundImage: "url(/assets/images/home/testimonies-mobile.jpg)",
        }}
      ></div>
    </section>
  );
}
