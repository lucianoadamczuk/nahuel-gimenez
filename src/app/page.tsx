import { About, Banner, Contact, Header, Testimonies } from "@/layouts";
import { content } from "../../public/locales/es";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      {/* The Banner wraps the component thatt will show up after the scroll animation */}
      <Banner>
        <Testimonies />
      </Banner>
      <Contact />
    </>
  );
}
