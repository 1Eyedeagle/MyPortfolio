import { motion } from "framer-motion";

const wordpressProjects = [
  {
    title: "The Industrial Mall",
    tech: "WordPress • HTML • CSS",
    desc: "Industrial products business website focused on clean layout, responsiveness, and performance.",
    link: "https://theindustrialmall.com",
  },
  {
    title: "Expertz Trust Finfra",
    tech: "WordPress • UI/UX",
    desc: "Real estate company website showcasing services, projects, and lead generation with a trust-focused design.",
    link: "https://expertztrustfinfra.com",
  },
  {
    title: "Expertz Digital Solutions",
    tech: "WordPress • SEO • UI Design",
    desc: "Corporate IT services website with modern UI, SEO-friendly structure, and responsive design.",
    link: "https://expertzdigitalsolution.com",
  },
  {
    title: "Expertz Fine Dine Restro Cafe",
    tech: "WordPress • Branding",
    desc: "Restaurant website with visually rich design, smooth navigation, and strong branding.",
    link: "https://expertzfinedinerestrocafe.com",
  },
];

const codingProjects = [
  {
    title: "Expertz Careers",
    tech: "React • Tailwind • API Integration",
    desc: "Career and recruitment platform built with React featuring job listings and frontend logic.",
    link: "#",
  },
  {
    title: "Expertz Diginfra",
    tech: "React • REST API • Dashboard UI",
    desc: "Real estate platform similar to 99acres with property listings, filters, and user dashboard.",
    link: "#",
  },
];

export default function Projects() {
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
            Projects
          </p>
          <h1 className="font-heading text-4xl md:text-5xl">
            My Development Journey
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A visual journey of my work — from WordPress client projects to
            modern React-based applications.
          </p>
        </motion.div>

        <Timeline title="WordPress Projects" projects={wordpressProjects} />
        <Timeline title="Coding Projects" projects={codingProjects} />
      </div>
    </section>
  );
}

/* ================= TIMELINE ================= */

function Timeline({ title, projects }) {
  return (
    <div className="mb-32">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-16 text-center">
        {title}
      </h2>

      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/20 -translate-x-1/2"></div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <TimelineItem
              key={project.title}
              project={project}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= TIMELINE ITEM ================= */

function TimelineItem({ project, align }) {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`relative flex w-full ${
        isLeft ? "justify-start pr-10" : "justify-end pl-10"
      }`}
    >
      {/* Dot */}
      <span className="absolute left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></span>

      {/* Card */}
      <div
        className="w-full md:w-[45%] bg-white/10 backdrop-blur-md
        border border-white/10 rounded-2xl p-8"
      >
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-primary text-sm mb-4">{project.tech}</p>

        <p className="text-gray-400 leading-relaxed mb-6">{project.desc}</p>

        {/* Link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary text-sm
          hover:gap-3 transition-all"
        >
          View Project
          <span>→</span>
        </a>
      </div>
    </motion.div>
  );
}
