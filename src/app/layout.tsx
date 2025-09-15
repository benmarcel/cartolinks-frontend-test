// This file is the main layout for our app. It's like the wrapper for all the pages.
// It sets up the basic HTML stuff, like the <html> and <body> tags.

// Hey, this is a special Next.js thing for types.
import type { Metadata } from "next";

// Importing our ThemeProvider to wrap the app with theme context.
import { ThemeProvider } from "./context/ThemeContext";
// We're importing the Inter font from Google Fonts here.
// Next.js handles this in a super smart way for performance.
import { Inter } from "next/font/google";

// This is where we bring in our main CSS file.
import "./globals.css";

// Setting up the Inter font with just the "latin" characters to keep the file size small.
const inter = Inter({ subsets: ["latin"] });

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// This is the info that shows up in the browser tab. Good for SEO!
export const metadata: Metadata = {
  title: "Frontend Assignment",
  description:
    "A pixel-perfect frontend interface built with Next.js and TypeScript",
};

// This is the main component for the layout.
// It takes `children`, which is basically whatever page we're on.
export default function RootLayout({
  children, // This is the actual page content that gets put inside the layout.
}: {
  children: React.ReactNode; // Just telling TypeScript what kind of thing `children` is.
}) {
  return (
    <html lang="en">
      {/* Applying the font to the whole body. Thanks, Tailwind! */}
      <body className={`${inter.className} max-w-screen`}>
          {/* Wrapping the app with ThemeProvider to give access to theme context */}
        <ThemeProvider>
          {/* Navbar component */}
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
