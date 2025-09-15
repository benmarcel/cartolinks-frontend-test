"use client"; // This line lets us use client-side features like state and event listeners.
import { Scale, Tag } from "lucide-react";

const GallerySection: React.FC = () => {
  return (
    <section className="mx-auto w-full px-4 mt-10 max-w-7xl">
      {/* Header row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold dark:text-white">Gallery</h2>
       <div className="flex space-x-4 text-sm text-gray-600">
         <span className="bg-gray-300 rounded-sm px-2"><Scale className="w-4 h-4 text-black inline-block" />Legal</span>
        <span className="bg-gray-300 rounded-sm px-2"><Tag className="w-4 h-4 text-black inline-block mr-1" />Pricing</span>
       </div>
      </div>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Gallery items go here */}
      </div>
    </section>
  );
};

export default GallerySection;
