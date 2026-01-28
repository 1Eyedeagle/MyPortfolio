import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgbqawo");

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
            Let’s Get In Touch
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project idea, job opportunity, or just want to say hello?
            Feel free to reach out — I’d love to connect.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                You can reach me directly via email or phone, or send a message
                using the form. I’m open to freelance, full-time, and remote
                opportunities.
              </p>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                📧{" "}
                <a
                  href="mailto:ishusharma882003@gmail.com"
                  className="hover:text-primary transition"
                >
                  ishusharma882003@gmail.com
                </a>
              </p>

              <p>
                📞{" "}
                <a
                  href="tel:+919911900710"
                  className="hover:text-primary transition"
                >
                  +91 99119 00710
                </a>
              </p>

              <p>🌍 India (Open to Remote)</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/1Eyedeagle"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/10
            rounded-3xl p-8 md:p-10 space-y-6"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/20 rounded-lg
              px-4 py-3 text-white placeholder-gray-400
              focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full bg-transparent border border-white/20 rounded-lg
              px-4 py-3 text-white placeholder-gray-400
              focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />

            <textarea
              name="message"
              required
              rows="5"
              placeholder="Your Message"
              className="w-full bg-transparent border border-white/20 rounded-lg
              px-4 py-3 text-white placeholder-gray-400 resize-none
              focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            ></textarea>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-4 bg-primary rounded-full font-medium
              hover:scale-[1.02] transition disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>

            {state.succeeded && (
              <p className="text-green-400 text-center">
                ✅ Message sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
