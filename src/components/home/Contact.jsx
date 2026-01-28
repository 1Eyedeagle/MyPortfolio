import { motion } from "framer-motion";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgbqawo");

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-gradient-to-b from-background to-black"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-primary uppercase tracking-widest text-sm mb-4">
            Contact
          </p>

          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Let’s build something
            <br /> great together
          </h2>

          <p className="text-gray-400 mb-8 max-w-md">
            Have a project in mind or looking for a frontend developer? Feel
            free to reach out.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>
              📧{" "}
              <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#spam?compose=GTvVlcSDZPCCvZpcrRfVqKmMFvHKslvpSzBsrgtcFCFLtbLwznGnwdkhdFRdlVJrtXzzXZFwbLkFC">
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

            <p>🌍 India (Remote)</p>
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
            rounded-2xl p-8 space-y-6"
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
            className="w-full py-4 bg-primary rounded-xl font-medium
              hover:scale-[1.02] transition disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {state.succeeded && (
            <p className="text-green-400 text-center">
              ✅ Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
