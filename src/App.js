import React from "react";
import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";

import mainImg from "./images/main.jpg";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";

const galleryImages = [img1, img2, img3, img4, img5, img6];

export default function NexlevelLanding() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center font-sans">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-purple-900 to-black">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Nexlevel Barbershop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-zinc-300 mb-10"
        >
          You deserve the best!
        </motion.p>

        <motion.a
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          href="tel:4046212164"
          className="flex items-center gap-3 bg-white text-black font-semibold text-lg px-6 py-4 rounded-2xl shadow-xl hover:scale-105 transition"
        >
          <Phone className="w-6 h-6" /> Call Now: (404) 621-2164
        </motion.a>
      </section>

      {/* Services / About Section */}
      <section className="w-full max-w-5xl py-20 px-6 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Premium Grooming Experience
          </h2>
          <p className="text-zinc-300 mb-6 leading-relaxed">
            At Nexlevel, we deliver sharp, clean cuts with unmatched precision.
            Whether you want a fresh fade, beard trim, or full grooming session
            — we make sure you walk out looking and feeling your best.
          </p>
          <ul className="text-zinc-300 space-y-2 text-lg">
            <li>• Skilled barbers</li>
            <li>• Clean & modern shop</li>
            <li>• Professional grooming</li>
            <li>• Walk-ins welcome</li>
          </ul>
        </div>

        {/* Hero Image */}
        <div className="h-72 md:h-full">
          <img
            src={mainImg}
            alt="Nexlevel Barbershop"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Hours */}
      <section className="w-full max-w-4xl text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-6">Hours of Operation</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-lg text-zinc-300">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <p className="font-semibold text-white mb-2">Monday - Saturday</p>
            <p>9 AM - 8 PM</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-700">
            <p className="font-semibold text-white mb-2">Sunday</p>
            <p>12 PM - 6 PM</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full max-w-5xl py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-48 object-cover rounded-2xl border border-zinc-700"
            />
          ))}
        </div>
      </section>

      {/* Socials */}
      <footer className="w-full py-16 px-6 flex flex-col items-center text-center border-t border-zinc-800">
        <a
          href="https://instagram.com/nexlevel_barbershop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg text-zinc-300 hover:text-white transition"
        >
          <Instagram className="w-6 h-6" /> @nexlevel_barbershop
        </a>

        <p className="text-zinc-600 text-sm mt-6">
          © {new Date().getFullYear()} Nexlevel Barbershop. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
