import { StyleTitle } from "@/styles";

export default function About() {
  return (
    <div className="container space-y-2 py-20 " id="about">
      <section className="  rounded-r-3xl rounded-t-3xl bg-gradient-to-tr from-gray  to-transparent">
        <div className="container py-20">
          <h3 className={StyleTitle()}>Acerca de nosotros</h3>
          <p className=" lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            magnam itaque nemo distinctio repudiandae architecto laboriosam esse
            dolorum voluptatum aliquam a, recusandae quia placeat illum velit
            deleniti excepturi voluptas error.
          </p>
        </div>
      </section>

      <section className="grid gap-2 lg:grid-cols-2">
        {/* 1 */}
        <div className="grid grid-cols-2 gap-2">
          <div className=" bg-gray p-5">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, saepe.
            </p>
          </div>

          {/* 2 */}
          <div className=" bg-gradient-to-tr from-primary to-primary-light p-5 text-light ">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus, saepe.
            </p>
          </div>
        </div>

        <div className="hidden lg:block"></div>

        {/* 3 */}
        <div className=" rounded-b-xl bg-gray p-5 text-center">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
            saepe.
          </p>
        </div>

        <div className="hidden lg:block"></div>

        {/* 4 */}
        <div className=" flex justify-evenly p-5">
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </div>
      </section>
    </div>
  );
}
