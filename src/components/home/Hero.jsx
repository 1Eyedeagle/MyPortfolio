import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../assets/Ishu_Sharma_Frontend_Developer_Resume.pdf";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black px-6 pt-32">
      {/* subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center"
      >
        {/* Intro */}
        <p className="text-primary uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
          Frontend Developer
        </p>

        {/* Name (static = authority) */}
        <h1 className="font-heading text-4xl md:text-6xl xl:text-7xl text-white leading-tight">
          Ishu Sharma
        </h1>

        {/* Value line (typing – controlled) */}
        <h2 className="mt-6 text-xl md:text-2xl text-gray-300 min-h-[2.5rem]">
          <Typewriter
            words={[
              "I build modern, scalable web interfaces",
              "I craft clean and responsive UI",
              "I turn ideas into polished products",
            ]}
            loop={0} // plays once, then stops
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1400}
          />
        </h2>

        {/* Description */}
        <p className="mt-10 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          I specialize in building high-quality frontend applications using
          React, Tailwind CSS, and modern JavaScript. My focus is on clean code,
          performance, and user-centric design.
        </p>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/projects"
            className="px-8 py-4 bg-primary rounded-xl font-medium
            hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href={resume}
            download
            className="px-8 py-4 border border-white/20 rounded-xl
            backdrop-blur-md hover:bg-white/10 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
