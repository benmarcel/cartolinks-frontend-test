// import Image from "next/image";
import HeroCarousel from "./components/HeroCarousel";
import FeatureSection from "./components/FeatureSection";
import GallerySection from "./components/GallerySection";
export default function Home() {
  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-white dark:bg-gray-800 w-full">
      {/* <h1 className="text-3xl font-bold underline">Hello World</h1> */}
      <HeroCarousel />
      <FeatureSection />
      <GallerySection />
    </main>
   
  );
}
