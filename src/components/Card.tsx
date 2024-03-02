import { ICard } from "@/interfaces";

export default function Card({ name, text, date }: ICard) {
  return (
    <div className=" w-80 rounded-2xl bg-light p-5 shadow-lg shadow-gray">
      <h6 className=" font-bold"> {name} </h6>
      <p className=" text-sm">{text}</p>
      <p className=" mt-10 text-end text-xs"> {date} </p>
    </div>
  );
}
