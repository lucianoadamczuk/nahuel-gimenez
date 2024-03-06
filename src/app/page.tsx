import { About, Banner, Contact, Header, Testimonies } from "@/layouts";
import { content } from "../../public/locales/es";

export default function Home() {

  return (
    <>
      <main>
        <Header 
          title={content.header.title} 
          highlight={content.header.highlight} 
          title2={content.header["title-2"]} 
          text={content.header.text} 
          phrase={content.header.phrase} 
        />
        <About />
        {/* The Banner wraps the component thatt will show up after the scroll animation */}
        <Banner>
          <Testimonies />
        </Banner>
        <Contact />
      </main>
    </>
  );
}
