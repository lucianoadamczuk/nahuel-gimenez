export default function Form() {
  const StyleInput = "w-full px-2 rounded-sm bg-dark-soft outline-none";
  const StyleSelect = "";
  return (
    <form
      action=""
      className=" w-full max-w-80 flex-col space-y-3 rounded-md bg-dark p-8 text-light shadow-lg shadow-dark"
    >
      {/* name */}
      <div>
        <h6>Nombre</h6>
        <input type="text" className={StyleInput} />
      </div>

      {/* email */}
      <div>
        <h6>Email</h6>
        <input type="email" className={StyleInput} />
      </div>

      {/* repeat email */}
      <div>
        <h6>Repite tu Email</h6>
        <input type="email" className={StyleInput} />
      </div>

      {/* location  */}
      <div className="w-full">
        <h6>Ubicación</h6>
        <select name="" id="" className={StyleInput}>
          <option value="">CABA</option>
          <option value="">Zona Oeste</option>
          <option value="">Zona Sur</option>
        </select>
      </div>

      {/* type of buy */}
      <div>
        <h6>Tipo de compra</h6>
        <select name="" id="" className={StyleInput}>
          <option value="">Contado</option>
          <option value="">Financiado</option>
        </select>
      </div>

      {/* investment amount */}
      <article className="flex items-center gap-5">
        <div>
          <h6>Monto a invertir</h6>
          <input type="number" className={StyleInput} />
        </div>
        <div className="flex flex-col items-center">
          <small className=" text-xs">USD</small>
          <input type="radio" />
        </div>
        <div className="gap- flex flex-col items-center">
          <small className=" text-xs">PESOS</small>
          <input type="radio" />
        </div>
      </article>

      {/* button */}
      <div className=" flex justify-center pt-5 ">
        <button className=" rounded-sm bg-highlight p-2">Enviar</button>
      </div>
    </form>
  );
}
