"use client";

import FeatureCard from "./FeatureCard";
import { Image, Video, Edit, Mic, Sparkles, Music, Code, Layers } from "lucide-react"; 

const FeatureSection: React.FC = () => {
  return (
    <section className="mx-auto w-full px-4 mt-10 max-w-7xl">
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold dark:text-white">Generate</h2>
        <button className="text-sm text-blue-600 hover:underline">Show all</button>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<Image className="w-5 h-5 text-blue-500" />}
          title="Image (WAN)"
          desc="Generate images with custom prompts."
          buttonLabel="Open"
        />
        <FeatureCard
          icon={<Video className="w-5 h-5 text-green-500" />}
          title="Video"
          desc="Generate short clips with AI."
          buttonLabel="Open"
        />
        <FeatureCard
          icon={<Edit className="w-5 h-5 text-purple-500" />}
          title="Edit"
          desc="Adjust images or apply filters."
          buttonLabel="Open"
        />
        <FeatureCard
          icon={<Mic className="w-5 h-5 text-red-500" />}
          title="Realtime"
          desc="AI-assisted calls & live interactions."
          buttonLabel="Open"
        />
        <FeatureCard
          icon={<Sparkles className="w-5 h-5 text-yellow-500" />}
          title="Enhancer"
          desc="Upscale and improve visuals."
          buttonLabel="Open"
        />
        <FeatureCard
          icon={<Music className="w-5 h-5 text-pink-500" />}
          title="Audio"
          desc="Generate music or sound effects."
          buttonLabel="Open"
        />
        <FeatureCard
          icon={<Code className="w-5 h-5 text-indigo-500" />}
          title="Code"
          desc="Turn ideas into working snippets."
          buttonLabel="Open"
        />
        <FeatureCard
          icon={<Layers className="w-5 h-5 text-teal-500" />}
          title="3D Models"
          desc="Build 3D assets from text prompts."
          buttonLabel="Open"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
