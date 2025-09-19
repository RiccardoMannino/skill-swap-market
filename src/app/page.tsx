import Stepper from "./components/ui/Stepper";
import Hero from "./heroimage.png";
import Image from "next/image";

export default function Home() {
  const start = [
    {
      passo: "Registrati",
    },
    {
      passo: (
        <span>
          Inserisci <br /> le tue skill
        </span>
      ),
    },
    {
      passo: (
        <span>
          Cerca altre skill e <br /> scambiale con le tue
        </span>
      ),
    },
  ];

  return (
    <div className="grid min-h-screen grid-flow-col gap-16 p-8 pb-20 font-sans max-sm:mt-10 sm:p-20">
      <main className="flex w-full flex-col items-center gap-[32px] sm:items-start">
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
        <section>
          <div className="rounded-2xl border p-4">
            <h2 className="mb-6 scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
              Come funziona
            </h2>
            <Stepper start={start} />
          </div>
        </section>
      </main>
    </div>
  );
}
