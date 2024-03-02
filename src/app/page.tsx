import { About, Banner, Contact, Header, Images, Testimonies } from "@/layouts";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Banner />
        <Testimonies />
        <Images />
        <Contact />
      </main>
    </>
  );
}
