import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="pt-32 pb-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            About Me
          </p>
          <h1 className="font-heading text-4xl md:text-5xl">Know Me Better</h1>
        </motion.div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md border border-white/10
          rounded-3xl p-8 md:p-12 mb-20"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m <span className="text-white font-semibold">Ishu Sharma</span>, a
            frontend developer who enjoys building modern, responsive, and
            visually clean web applications. I focus on writing maintainable
            code and creating smooth user experiences using
            <span className="text-white"> React</span> and
            <span className="text-white"> Tailwind CSS</span>.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I have hands-on experience working on real-world projects such as
            business websites, dashboards, and a real-estate platform. I enjoy
            learning new technologies and continuously improving my frontend
            skills.
          </p>
        </motion.div>

        {/* Education & Hobbies */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/10
            rounded-3xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              🎓 Education
            </h2>

            <ul className="space-y-6 text-gray-400">
              <li>
                <p className="text-white font-medium">
                  Bachelor of Computer Science
                </p>
                <p>K. L. Mehta Dayanand College (MDU)</p>
                <p className="text-sm">2021 – 2024</p>
              </li>

              <li>
                <p className="text-white font-medium">12th (Non-Medical)</p>
                <p>Mahadev Desai Sr. Sec. Public School</p>
              </li>

              <li>
                <p className="text-white font-medium">10th Standard</p>
                <p>Sun Shine Public School</p>
              </li>
            </ul>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/10
            rounded-3xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              🎯 Hobbies & Interests
            </h2>

            <ul className="space-y-4 text-gray-400">
              <li>📖 Reading books & articles</li>
              <li>🎧 Listening to music</li>
              <li>🧠 Solving reasoning & aptitude questions</li>
              <li>🎨 Exploring modern UI/UX designs</li>
              <li>💻 Learning new frontend technologies</li>
            </ul>
          </motion.div>
        </div>

        {/* Career Goal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary/20 to-accent/10
          border border-white/10 rounded-3xl p-10"
        >
          <h2 className="text-2xl font-semibold text-white mb-4">
            🚀 Career Objective
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            My goal is to work as a frontend developer in a growth-oriented
            company where I can build meaningful products, improve my technical
            skills, and contribute to real-world solutions while continuously
            learning and evolving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
