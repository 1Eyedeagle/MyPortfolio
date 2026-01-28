import   { motion }  from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group block bg-white/10 backdrop-blur-md border border-white/10
        rounded-2xl p-8 hover:-translate-y-2 transition-all"
    >
      <h3 className="text-xl font-semibold mb-4">{project.title}</h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 text-xs rounded-full bg-white/10 text-white"
          >
            {t}
          </span>
        ))}
      </div>

      <span className="text-primary text-sm font-medium">View Project →</span>
    </motion.a>
  );
}
