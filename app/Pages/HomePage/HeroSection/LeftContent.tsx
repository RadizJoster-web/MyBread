import { IoArrowForward } from "react-icons/io5";

export default function LeftContent() {
  return (
    <div className="flex flex-col items-center lg:items-start justify-center gap-4 md:gap-6 max-w-2xl lg:max-w-3xl text-center lg:text-left">
      {/* Badge Banner */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 w-max bg-primary/10">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
        </span>
        <span className="text-xs md:text-sm font-semibold text-muted-cocoa uppercase tracking-wider">
          Baked Fresh Every Morning
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-semibold text-dark-chocolate leading-[1.15] tracking-tight">
        Artisan Flavors For Every <br className="hidden sm:block" />
        <span className="relative inline-block text-primary italic mt-1 pb-1">
          Special Moment
          {/* Efek Coretan Garis Elegan */}
          <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full"></span>
        </span>
      </h1>

      {/* Description */}
      <p className="text-base md:text-xl text-muted-cocoa/90 font-medium leading-relaxed max-w-xl">
        Discover the art of baking with our premium ingredients and time-honored
        recipes, crafted to elevate your daily indulgence.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 mt-4 md:mt-6 w-full sm:w-auto">
        {/* Button Shop (Primary) */}
        <button className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-dark-chocolate transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
          <span>Shop Our Menu</span>
        </button>

        {/* Button About (Secondary) */}
        <button className="flex items-center justify-center gap-2 bg-transparent hover:bg-primary/5 text-dark-chocolate hover:text-primary border border-dark-chocolate/20 hover:border-primary/30 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 group cursor-pointer">
          <span>Our Story</span>
          <IoArrowForward className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
