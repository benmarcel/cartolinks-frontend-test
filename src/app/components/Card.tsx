"use client"; // This line lets us use client-side features like state and event listeners.

type CarouselCardProps = {
  img: string;
  title: string;
  desc: string;
  
  label: string;
  sidetext: string;
};

// This is a reusable component for each card in the carousel.
// It takes in the image, title, and description as props.
const CarouselCard: React.FC<CarouselCardProps> = ({ img, title, desc,  label, sidetext }) => {
  return (
   <div
  className={`h-[400px] max-h-[400px] w-[60%] flex-shrink-0 
              rounded-3xl bg-cover bg-center flex p-4 text-white 
              shadow-lg relative mr-[2%]`}
  style={{ backgroundImage: `url(${img})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50 rounded-3xl" />

  {/* Content wrapper */}
  <div className="relative w-full h-full drop-shadow-2xl">
    {/* Side text */}
    <p className="text-xs sm:text-sm md:text-base absolute top-2 left-2">
      {sidetext}
    </p>

    {/* Main content wrapper */}
    <div className="flex flex-col justify-center h-full mt-12 sm:mt-20 md:mt-28 px-3 sm:px-6">
      {/* Big center label */}
      <h1
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                   font-bold text-center mx-auto w-full leading-tight"
      >
        {label}
      </h1>

      {/* Title + description */}
      <div className="w-full md:w-2/3 lg:w-1/2 mt-4 sm:mt-6 md:text-left mb-12">
        <h2 className="text-sm sm:text-base md:text-lg font-semibold w-full">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base">{desc}</p>
      </div>

      {/* Button */}
      <button
        className="absolute bottom-2 right-2 
                   bg-white bg-opacity-50 hover:bg-opacity-75 
                   py-1 px-3 sm:py-2 sm:px-4 
                   rounded-xl md:rounded-2xl shadow-md 
                   text-black text-xs sm:text-sm md:text-base"
      >
        Try now
      </button>
    </div>
  </div>
</div>

  );
};

export default CarouselCard;
// A simple card component to be used in the HeroCarousel
