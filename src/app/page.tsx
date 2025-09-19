import HeroSection from "./components/HeroSection";
import Stepper from "./components/ui/Stepper";

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
        <HeroSection />
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
