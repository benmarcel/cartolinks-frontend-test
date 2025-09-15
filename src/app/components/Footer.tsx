"use client"; // This line lets us use client-side features like state and event listeners.
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 bg-gray-800 text-gray-800 dark:bg-white dark:text-gray-100 shadow-inner">
      <div className="container mx-auto text-center flex justify-between items-center text-white dark:text-black">
        <div className="flex items-center">
          <Image src="/krea.png" alt="Krea AI" width={30} height={40} />
          <span className="ml-2">Krea AI</span>
        </div>
        <div>
            <p className="text-sm mr-2 inline-block">Curated by</p>
            <p className="text-lg font-bold inline-block">Mobbin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

   
