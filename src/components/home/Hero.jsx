import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../assets/Ishu_Sharma_Frontend_Developer_Resume.pdf";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black px-6 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl text-center"
      >
        {/* Animated Line */}
        <h1 className="font-heading text-4xl md:text-6xl xl:text-7xl leading-tight text-white">
          <Typewriter
            words={[
              "Hello 👋",
              "I am Ishu Sharma",
              "Frontend Web Developer",
              "Crafting modern web experiences",
            ]}
            loop={0} // 0 = infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </h1>

        {/* Subtext */}
        <p className="mt-8 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          I design and develop responsive, scalable, and visually stunning
          websites using React, Tailwind CSS, and modern frontend tools.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/projects"
            className="px-8 py-4 bg-primary rounded-xl hover:scale-105 transition"
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
