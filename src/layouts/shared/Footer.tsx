import { content } from "../../../public/locales/es";

export default function Footer() {
  return (
    <footer className="container ">
      <div className="container rounded-t-lg bg-gradient-to-t from-dark to-dark-soft pb-5 pt-10 text-light">
        <section className=" grid place-items-center gap-5 md:grid-cols-3">
          {/* logo */}
          <div className="absolut size-32 rounded-full bg-dark-soft"></div>
          {/* text */}
          <p className=" text-center">
            Somos Casa Teva, tu aliada confiable en el mundo de las inversiones
            inmobiliarias.
          </p>

          {/* email and phone */}
          <div>
            <p>
              <strong>Email:</strong> {content.config.email}
            </p>
            <p>
              <strong>Telefono:</strong> {content.config.phone}
            </p>
          </div>
        </section>

        <div className="pt-10 text-center text-xs opacity-30">
          <p>Casa Teva © Todos los derechos reservados 2024 - 2026</p>
        </div>
      </div>
    </footer>
  );
}
