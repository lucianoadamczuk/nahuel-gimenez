import { About, Banner, Contact, Header, Testimonies } from "@/layouts";

export default function Home() {
  return (
    <>
      <main>
        <Header />
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
