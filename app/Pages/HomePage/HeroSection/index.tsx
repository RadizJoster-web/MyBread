import Image from "next/image";
import heroBg from "@/public/images/breads-herobg.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-start overflow-hidden"
    >
      <Image
        src={heroBg}
        alt="Latar Belakang My Bread"
        fill
        priority
        className="object-cover absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 w-full px-4 sm:px-12 md:px-20 text-white">
        <header className="flex flex-col items-start gap-4">
          {/* <span className="bg-linear-to-br from-[#D4A373] to-[#7A6A53] py-1.5 px-4 rounded-full text-xs font-sans font-semibold uppercase tracking-widest text-[#4A3525]">
            Welcome!
          </span> */}

          <h1 className="bg-linear-to-br from-primary to-muted-cocoa bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-playfair font-bold leading-tight drop-shadow-md ">
            The art of Baking <br />
            Perfected
          </h1>

          <p className="font-sans text-sm sm:text-base text-bacground max-w-md my-2 leading-relaxed">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            sapien nec mi efficitur tincidunt. Donec vel sapien nec mi efficitur
            tincidunt.
          </p>

          <button className="relative px-6 py-2.5 text-lg font-semibold bg-transparent rounded-lg cursor-pointer overflow-hidden text-primary border-2 border-primary transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] before:content-[''] before:absolute before:inset-0 before:m-auto before:w-12.5 before:h-12.5 before:rounded-lg before:bg-[#C1A362] before:z-[-1] before:scale-0 before:transition-all before:duration-600 before:ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-muted-cocoa hover:scale-110 hover:shadow-[0_0px_20px_rgba(193,163,98,0.4)] hover:before:scale-[3] active:scale-100">
            Buy Now
          </button>
        </header>
      </div>
    </section>
  );
}
