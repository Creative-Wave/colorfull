import { useState } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import Link from "next/link";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-[10dvh] absolute top-0 left-0 right-0 bg-transparent">
        <div className="flex justify-between items-center px-16 md:px-16 text-white mt-5">
          <div className="font-black text-xl md:text-2xl">L O G O</div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex justify-center items-center gap-4 md:gap-10 font-bold">
            <Link href="/" className="hover:text-gray-300">
              HOME
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/card" className="hover:text-gray-300">
              Card
            </Link>
          </div>
          <div className="hidden md:flex justify-center items-center gap-4 md:gap-7">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer">
              <Facebook className="text-white" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer">
              <Instagram className="text-white" />
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden h-screen bg-[#6830a8] relative z-20 flex flex-col justify-center items-center mt-5 space-y-16 font-bold text-white">
            <Link href="/" className="hover:text-gray-300" onClick={toggleMenu}>
              HOME
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300"
              onClick={toggleMenu}>
              About
            </Link>
            <Link
              href="/card"
              className="hover:text-gray-300"
              onClick={toggleMenu}>
              Card
            </Link>
            <div className="flex gap-4 mt-4">
              <div className="w-8 h-8 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer">
                <Facebook className="text-white" />
              </div>
              <div className="w-8 h-8 bg-[#8c27ff69] rounded-full flex justify-center items-center cursor-pointer">
                <Instagram className="text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
