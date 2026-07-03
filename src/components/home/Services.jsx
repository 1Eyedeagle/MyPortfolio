import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 bg-gradient-to-b from-background to-black"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-primary uppercase tracking-widest text-sm mb-4">
          Services
        </p>

        <h2 className="font-heading text-3xl md:text-4xl mb-16">
          What I Can Do For You
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Frontend Development",
              desc: "Modern, responsive and scalable frontend applications using React and Tailwind CSS.",
              icon: "💻",
            },
            {
              title: "UI / UX Design",
              desc: "Clean, user-friendly interfaces designed with Figma and modern design principles.",
              icon: "🎨",
            },
            {
              title: "Website Performance",
              desc: "Optimizing websites for speed, SEO and best user experience.",
              icon: "⚡",
            },
            {
              title: "API Integration",
              desc: "Seamless REST API integration with secure and efficient frontend logic.",
              icon: "🔗",
            },
            {
              title: "WordPress Development",
              desc: "Custom WordPress websites tailored to business and client needs.",
              icon: "🌐",
            },
            {
              title: "Maintenance & Support",
              desc: "Bug fixes, UI improvements and long-term website maintenance.",
              icon: "🛠️",
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-md border border-white/10
                rounded-2xl p-8 text-left hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-6">{service.icon}</div>

              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
