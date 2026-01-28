import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            About Me
          </p>

          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Passionate Frontend Developer
            <br />
            focused on <span className="text-primary">clean UI</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            I’m Ishu Sharma, a frontend developer with hands-on experience
            building responsive, user-centric websites and web applications.
            I specialize in React, Tailwind CSS, and modern UI systems.
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I’ve worked on real-world projects including business websites,
            dashboards, and a real-estate platform similar to 99acres,
            focusing on performance, usability, and aesthetics.
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary rounded-xl hover:scale-105 transition"
          >
            Let’s Work Together
          </a>
        </motion.div>

        {/* Right Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {[
            { title: "Experience", value: "1+ Years" },
            { title: "Projects", value: "10+ Completed" },
            { title: "Tech Stack", value: "React, Tailwind" },
            { title: "Availability", value: "Open to Work" },
          ].map(card => (
            <div
              key={card.title}
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-white text-lg font-semibold">
                {card.value}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {card.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
