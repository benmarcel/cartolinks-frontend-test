"use client";

import ToggleTheme from "./ToggleTheme";
import Img from "next/image";
import { useState } from "react";

import {
  Home,
  ImageIcon,
  Video,
  PenTool,
  Palette,
  Brush,
  File,
  Headset,
  Bell,
  Menu,
  X,
} from "lucide-react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 shadow-2xl relative">
      {/* Left: Logo + Profile */}
      <div className="flex items-center space-x-6">
        <Img src="/krea.png" alt="Logo" width={30} height={40} />

        {/* Profile (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-2">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 rounded-full"></div>
          <select name="user" id="user" className="bg-transparent border-none text-sm">
            <option value="user1">user@example.com</option>
            <option value="add account">Add Account</option>
            <option value="Logout">Logout</option>
          </select>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-4 rounded-lg p-2 bg-gray-100 dark:bg-gray-700">
        <a href="#"><Home /></a>
        <a href="#"><ImageIcon /></a>
        <a href="#"><Video /></a>
        <a href="#"><PenTool /></a>
        <a href="#"><Palette /></a>
        <a href="#"><Brush /></a>
        <a href="#"><File /></a>
      </nav>

      {/* Right side */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="gallery flex items-center"><ImageIcon className="mr-1" />Gallery</div>
        <div className="support flex items-center"><Headset className="mr-1" />Support</div>
        <Bell className="text-gray-700 dark:text-gray-300" />
        <ToggleTheme />
        <div className="w-9 h-9 bg-gradient-to-br from-purple-400 via-pink-500 to-blue-500 rounded-full"></div>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg p-4 flex flex-col space-y-4 md:hidden z-50">
          <a href="#" className="flex items-center space-x-2"><Home /> <span>Home</span></a>
          <a href="#" className="flex items-center space-x-2"><ImageIcon /> <span>Images</span></a>
          <a href="#" className="flex items-center space-x-2"><Video /> <span>Videos</span></a>
          <a href="#" className="flex items-center space-x-2"><PenTool /> <span>Design</span></a>
          <a href="#" className="flex items-center space-x-2"><Palette /> <span>Colors</span></a>
          <a href="#" className="flex items-center space-x-2"><Brush /> <span>Brush</span></a>
          <a href="#" className="flex items-center space-x-2"><File /> <span>Files</span></a>
          <div className="flex items-center space-x-2"><Headset /> <span>Support</span></div>
          <div className="flex items-center space-x-2"><ImageIcon /> <span>Gallery</span></div>
          <ToggleTheme />
        </div>
      )}
    </header>
  );
};

export default Navbar;
