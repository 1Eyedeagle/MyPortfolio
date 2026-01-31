import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Tools & Design",
    skills: ["Git & GitHub", "Figma", "Canva", "WordPress", "Postman"],
  },
  {
    title: "Other Skills",
    skills: [
      "REST API Integration",
      "UI / UX Understanding",
      "Problem Solving",
      "Debugging",
    ],
  },
];

export default function Skills() {
  return (
    <section className="pt-32 pb-28 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h1 className="font-heading text-4xl md:text-5xl">
            My Technical Skillset
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A clear overview of the technologies and tools I work with, focusing
            on frontend development and modern UI practices.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/10
              rounded-3xl p-8"
            >
              <h2 className="text-xl font-semibold text-white mb-8">
                {group.title}
              </h2>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <SkillChip key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-400 text-center mt-20"
        >
          * Skills listed represent hands-on experience and continuous learning.
        </motion.p>
      </div>
    </section>
  );
}

/* ================= SKILL CHIP ================= */

function SkillChip({ label }) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className="px-4 py-2 text-sm text-gray-300
      bg-white/10 border border-white/10
      rounded-full cursor-default
      hover:text-white hover:border-primary
      transition"
    >
      {label}
    </motion.span>
  );
}
