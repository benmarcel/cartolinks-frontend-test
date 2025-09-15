"use client";

import { useState } from "react";
// import Image from 'next/image';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "./Card";
// Importing a Card component to display individual items in the carousel
type Slide = {
  img: string;
  title: string;
  desc: string;
  label: string;
  sidetext: string;
};

const slides: Slide[] = [
  {
    title: "WAN 2.2 Image generation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel eius eaque sint modi ipsam perspiciatis ut repellat dolor illo!",
    img: "/hero-img1.jpeg",
    label: "WAN 2.2",
    sidetext: "AI image generation"
  },
  {
    title: "FLUX Krea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel eius eaque sint modi ipsam perspiciatis ut repellat dolor illo!",
    img: "/hero1.jpeg",
    label: "Open Source",
    sidetext: "Revolutionizing the creative process"
  },
  {
    title: "Video Generation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vel eius eaque sint modi ipsam perspiciatis ut repellat dolor illo!",
    img: "/hero2.jpeg",
    label: "Coming Soon",
    sidetext: "Innovating the future"
  },
  {
    title: "AI Music Composer",
    desc: "Compose original tracks instantly with AI-powered sound design and seamless mixing.",
    img: "/hero3.jpeg",
    label: "Music AI",
    sidetext: "Sound that inspires"
  },
  {
    title: "3D Model Builder",
    desc: "Generate detailed 3D models from simple text prompts or reference images.",
    img: "/hero4.jpeg",
    label: "3D Tools",
    sidetext: "From text to 3D reality"
  },
  {
    title: "Chat Assistant",
    desc: "Conversational AI that adapts to your workflow, offering smarter answers and context-aware guidance.",
    img: "/hero5.jpeg",
    label: "AI Chat",
    sidetext: "Always ready to help"
  },
  {
    title: "Art Style Transfer",
    desc: "Transform your images with famous artistic styles, blending creativity with technology.",
    img: "/hero-img1.jpeg",
    label: "Creative AI",
    sidetext: "Your art, reimagined"
  },
  {
    title: "Code Generator",
    desc: "Accelerate development by turning plain English into production-ready code snippets.",
    img: "/hero-img1.jpeg",
    label: "Dev Tools",
    sidetext: "Build faster with AI"
  }
];


const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full  relative overflow-hidden">
      <div
        className="inner-slider flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 62}%)` }}
      >
        {slides.map((slide, index) => (
          <Card
            key={index}
            title={slide.title}
            desc={slide.desc}
            img={slide.img}
            label={slide.label}
            sidetext={slide.sidetext}
          />
        ))}
      </div>
      {/* navigation button */}
      <div className="absolute mt-2 right-3 space-x-1">
        <button
          onClick={prevSlide}
          className=" bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="w-4 h-4 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className=" bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full shadow-md"
        >
          <ChevronRight className="w-4 h-4 text-gray-800" />
        </button>
      </div>
      {/* dot indicators */}
      <div className=" bottom-4 mx-auto space-x-2 flex mt-6 justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
