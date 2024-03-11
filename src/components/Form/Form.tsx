"use client";
import { StyleButtton, StyleIcon, StyleInput } from "@/styles";
import { motion } from "framer-motion";
import {
  ChangeEvent,
  FormEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import { PUBLIC_API_KEY, SERVICE_ID, TEMPLATE_ID } from "../../API/emailJS";
import { ICheck } from "@/icons";

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
  /* ----------------------------- end ----------------------------- */

  /* ------------------------------ start data handling ----------------------------- */
  const [formData, setFormData] = useState({
    name: undefined,
    email: undefined,
    phone: undefined,
    location: "CABA",
    typeOfInvestment: "Contado",
    investment: undefined,
    currency: "USD",
    message: undefined,
  });

  // function to handle tha changes in the form
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  /* ---------------------------- end  --------------------------- */

  /* ---------------------------- Start send mail --------------------------- */
  const formRef = useRef<HTMLFormElement | undefined>();
  const [isCompleted, setIsCompleted] = useState<boolean>(true);
  const [isSent, setIsSent] = useState<boolean>(false);
  function sendEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.investment
    ) {
      // handle the UI
      setIsCompleted(false);
      setTimeout(() => {
        setIsCompleted(true);
      }, 3000);
    } else {
      formRef.current &&
        emailjs
          .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
            publicKey: PUBLIC_API_KEY,
          })
          .then(() => {
            console.log("sent it");
          })
          .catch(() => {
            console.log("error");
          });

      // handle the UI
      setIsSent(true);
    }
  }
  /* ---------------------------- end --------------------------- */
  return (
    <motion.form
      ref={formRef as MutableRefObject<HTMLFormElement | null>}
      onSubmit={sendEmail}
      transition={{ duration: 0.8 }}
      whileInView={
        width && width < 768
          ? { y: ["200px", "-20px", "0px"] }
          : { x: ["200px", "-20px", "0px"] }
      }
      className=" w-full max-w-80 flex-col space-y-3 rounded-md bg-dark-soft p-8 text-light shadow-lg shadow-dark duration-200"
    >
      {!isSent ? (
        <>
          {/* name */}
          <div>
            <label htmlFor="name">Nombre y apellido</label>
            <input
              id="name"
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
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={StyleInput()}
            />
          </div>

          {/* phone */}
          <div>
            <label htmlFor="phone">Telefono</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={StyleInput()}
            />
          </div>

          {/* location  */}
          <div className="w-full">
            <label htmlFor="location">Ubicación de la inversión</label>
            <select
              id="location"
              name="location"
              onChange={handleChange}
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
            <label htmlFor="typeOfInvestment">Tipo de inversión</label>
            <select
              id="typeOfInvestment"
              name="typeOfInvestment"
              value={formData.typeOfInvestment}
              onChange={handleChange}
              className={StyleInput()}
            >
              <option value="Contado">Contado</option>
              <option value="Financiado">Financiado</option>
            </select>
          </div>

          {/* investment amount */}
          <div className="flex items-center gap-5">
            <div>
              <label htmlFor="investment">Monto a invertir</label>
              <input
                id="investment"
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
                id="USD"
                type="radio"
                name="currency"
                value={"USD"}
                defaultChecked
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col items-center">
              <label htmlFor="pesos" className=" text-xs">
                PESOS
              </label>
              <input
                id="pesos"
                type="radio"
                name="currency"
                value={"PESOS"}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* text */}
          <div>
            <label htmlFor="message">¿Algo que quiera agregar?</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={StyleInput({ className: "resize-none text-xs" })}
            ></textarea>
          </div>

          {/* button */}
          <div className=" flex justify-center pt-2 ">
            {!isCompleted ? (
              <p className=" animate-pulse py-2">faltan datos</p>
            ) : (
              <button className={StyleButtton({ size: "small" })}>
                Enviar
              </button>
            )}
          </div>
        </>
      ) : (
        <div className=" flex items-center justify-center">
          <ICheck className={StyleIcon({ size: "md" })} />
        </div>
      )}
    </motion.form>
  );
}
