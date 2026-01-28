import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 75 },
      { name: "JavaScript", level: 60 },
      { name: "React.js", level: 70 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Bootstrap", level: 75 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Git & GitHub", level: 65 },
      { name: "Figma", level: 70 },
      { name: "Canva", level: 80 },
      { name: "WordPress", level: 85 },
      { name: "Postman", level: 85 },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "REST API Integration", level: 65 },
      { name: "UI / UX Understanding", level: 80 },
      { name: "Problem Solving", level: 70 },
      { name: "Debugging", level: 75 },
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
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            Skills
          </p>
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

              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
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
          * Skill levels represent practical experience and continuous learning.
        </motion.p>
      </div>
    </section>
  );
}

/* ================= SKILL BAR ================= */

function SkillBar({ skill }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
}
