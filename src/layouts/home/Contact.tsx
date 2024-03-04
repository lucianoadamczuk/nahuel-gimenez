"use client";
import { Form } from "@/components";
import { StyleTitle } from "@/styles";

export default function Contact() {
  return (
    <div id="contact">
      {/*  ----------------------------- Mobile version ---------------------------- */}
      <section className="container py-20 md:hidden">
        <h3 className={StyleTitle()}>Contacto</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia
          aperiam, assumenda aspernatur soluta reiciendis, debitis dicta nobis
          cum eum, unde veniam asperiores repudiandae officiis. Dolorem minus
          consequatur aut odio?
        </p>

        <article className="flex justify-center rounded-3xl bg-gradient-to-t  from-gray from-70% to-transparent to-30% py-10">
          <Form />
        </article>
      </section>

      {/*  ----------------------------- Desktop version ---------------------------- */}
      <section className="container hidden h-full py-20 md:block">
        <article className="container flex items-center rounded-3xl bg-gradient-to-r from-gray from-80% to-transparent to-30% py-20  ">
          {/* text container */}
          <div>
            <h3 className={StyleTitle()}>Contacto</h3>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quia
              aperiam, assumenda aspernatur soluta reiciendis, debitis dicta
              nobis cum eum, unde veniam asperiores repudiandae officiis.
              Dolorem minus consequatur aut odio?
            </p>
          </div>

          {/* form */}
          <Form />
        </article>
      </section>
    </div>
  );
}
