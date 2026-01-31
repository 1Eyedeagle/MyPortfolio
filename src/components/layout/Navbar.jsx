import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 ">
      {/* NAVBAR */}
      <nav
        className={`transition-all h-16 duration-300 ${
          scrolled
            ? "bg-white/10 backdrop-blur-md border-b border-white/10"
            : "bg-transparent "
        }`}
      >
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-heading text-xl text-white tracking-wide">
            Ishu Sharma<span className="text-primary">.</span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative hover:text-white transition
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-primary
                  after:transition-all hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="/"
            className="hidden md:inline-flex items-center px-5 py-2
            bg-primary/90 hover:bg-primary text-sm rounded-full
            transition"
          >
            Hire Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1 p-4"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm
              bg-background p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="font-heading text-xl text-white">
                  Ishu<span className="text-primary">.</span>
                </h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-2xl text-white"
                >
                  ✕
                </button>
              </div>

              <ul className="space-y-8 text-lg text-gray-300">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-12 text-center px-6 py-3
                bg-primary rounded-full"
              >
                Hire Me
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
