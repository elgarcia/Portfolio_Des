"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-black backdrop-blur z-50 border-b border-gray-800">
      <div className=" px-4 sm:px-6 lg:px-20 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-pink-300">
          Portfolio Dresler
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base">
          <Link href="#inicio" className="hover:text-pink-300 transition-colors">
            Inicio
          </Link>
          <Link href="#about" className="hover:text-pink-300 transition-colors">
            Sobre mi
          </Link>
          <Link href="#gallery" className="hover:text-pink-300 transition-colors">
            Proyectos
          </Link>
          <Link href="#contact" className="hover:text-pink-300 transition-colors">
            Contacto
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-pink-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4 text-base">
              <Link
                href="#inicio"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-300 transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-300 transition-colors"
              >
                Sobre mi
              </Link>
              <Link
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-300 transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-300 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
