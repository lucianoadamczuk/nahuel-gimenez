"use client";
import { StyleButtton, StyleInput } from "@/styles";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";

export default function Form() {
  /* ---------------------------- start animations ---------------------------- */
  const [width, setWidth] = useState<number>();
  useEffect(() => {
    function handleWidth() {
      setWidth(window.innerWidth);
    }

    handleWidth();
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  /* ----------------------------- end animations ----------------------------- */

  /* ------------------------------ start data handling ----------------------------- */
  const [formData, setFormData] = useState({
    name: undefined,
    email: undefined,
    location: "CABA",
    typeOfInvestment: "Contado",
    investment: undefined,
    currency: "USD",
    mensage: undefined,
  });

  // function to handle tha changes in the form
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  }

  /* ---------------------------- end form handling --------------------------- */

  /* ---------------------------- Start send mail --------------------------- */


  return (
    <motion.form
      transition={{ duration: 0.8 }}
      whileInView={
        width && width < 768
          ? { y: ["200px", "-20px", "0px"] }
          : { x: ["200px", "-20px", "0px"] }
      }
      className=" w-full max-w-80 flex-col space-y-3 rounded-md bg-dark-soft p-8 text-light shadow-lg shadow-dark"
    >
      {/* name */}
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={StyleInput()}
        />
      </div>

      {/* email */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={StyleInput()}
        />
      </div>

      {/* location  */}
      <div className="w-full">
        <label htmlFor="location">Ubicación de la inversión</label>
        <select
          name="location"
          onChange={handleChange}
          defaultValue={"CABA"}
          value={formData.location}
          className={StyleInput()}
        >
          <option value="CABA">CABA</option>
          <option value="Zona Oeste">Zona Oeste</option>
          <option value="Zona Sur">Zona Sur</option>
        </select>
      </div>

      {/* type of buy */}
      <div>
        <label htmlFor="Type of buy">Tipo de inversión</label>
        <select
          name="typeOfInvestment"
          onChange={handleChange}
          className={StyleInput()}
        >
          <option value="Contado">Contado</option>
          <option value="Financiado">Financiado</option>
        </select>
      </div>

      {/* investment amount */}
      <article className="flex items-center gap-5">
        <div>
          <label htmlFor="investment">Monto a invertir</label>
          <input
            type="number"
            name="investment"
            value={formData.investment}
            onChange={handleChange}
            className={StyleInput()}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="USD" className=" text-xs">
            USD
          </label>
          <input
            type="radio"
            name="currency"
            value={"USD"}
            defaultChecked
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="Pesos" className=" text-xs">
            PESOS
          </label>
          <input
            type="radio"
            name="currency"
            value={"PESOS"}
            onChange={handleChange}
          />
        </div>
      </article>
      <div>
        <label htmlFor="Mensaje">¿Algo que quiera agregar?</label>
        <textarea
          name="message"
          id=""
          rows={5}
          className={StyleInput({ className: "resize-none text-xs" })}
        ></textarea>
      </div>
      {/* button */}
      <div className=" flex justify-center pt-2 ">
        <button 
          className={StyleButtton({ size: "small" })}
        >
          Enviar
        </button>
      </div>
    </motion.form>
  );
}
