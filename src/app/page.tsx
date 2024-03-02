import { About, Banner, Contact, Header, Testimonies } from "@/layouts";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <About />
        <Banner />
        <Testimonies />

        <Contact />
      </main>
    </>
  );
}
