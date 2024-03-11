"use client";
import { ICross, IMenu } from "@/icons";
import { StyleButtton, StyleIcon } from "@/styles";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Inicio", path: "#home" },
    { name: "Acerca", path: "#about" },
    { name: "Testimonios", path: "#testimonies" },
    { name: "Contacto", path: "#contact" },
  ];
  const [isOpen, setIsOpen] = useState<boolean>();

  const StyleLinks =
    "capitalize px-2 py-5 border-b-2 my-2 border-gray rounded-sm  hover:bg-light lg:py-3 lg:px-5 lg:border-none";

  return (
    <nav className="fixed top-5 z-50 w-full ">
      <div className="container relative flex  items-center">
        <div className="flex w-full items-center justify-between rounded-md bg-gradient-to-b from-gray to-light p-5 lg:py-2">
          <p>LOGO</p>

          {/* ----------------------------- links container ---------------------------- */}
          <section className="container absolute left-0 top-14 h-0 w-full md:hidden ">
            {/* mobile links */}
            <div
              className={`relative z-40 flex flex-col justify-center overflow-hidden rounded-md bg-gradient-to-t from-gray to-light px-4 duration-300 lg:hidden ${!isOpen ? "h-0" : "h-[85vh]"} `}
            >
              {links.map(({ name, path }, index) => (
                <Link
                  key={name}
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={
                    index !== links.length - 1
                      ? StyleLinks
                      : StyleButtton({
                          className: "mt-28",
                        })
                  }
                >
                  {name}
                </Link>
              ))}
            </div>
          </section>

          {/* desktop links */}
          <div className="hidden items-center gap-5 lg:flex">
            {links.map(({ name, path }, index) => (
              <Link
                key={name}
                href={path}
                onClick={() => setIsOpen(false)}
                className={
                  index !== links.length - 1
                    ? StyleLinks
                    : StyleButtton({ className: "" })
                }
              >
                {name}
              </Link>
            ))}
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? (
              <IMenu className={StyleIcon({ size: "sm", color: "dark" })} />
            ) : (
              <ICross className={StyleIcon({ size: "sm", color: "dark" })} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
