import Image from "next/image";
import Hero from "../heroimage.png";

export default function HeroSection() {
  return (
    <section className="flex w-full items-center justify-center gap-7 p-10 max-sm:flex-col max-sm:p-6">
      <div className="flex flex-col justify-center gap-4">
        <h1 className="scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance">
          Scambia le tue skill <br /> impara dagli altri!
        </h1>
        <p className="text-center leading-7 [&:not(:first-child)]:mt-6">
          Piattaforma gratuita per scambio di competenze
        </p>
        <button className="w-fit self-center rounded-2xl bg-green-500 px-4 py-2 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:cursor-pointer">
          Inizia Ora!
        </button>
      </div>
      <div>
        <Image
          src={Hero}
          width={300}
          height={300}
          alt="immagine hero"
          className="h-96 w-96 rounded-2xl"
        />
      </div>
    </section>
  );
}
