import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TbDownload } from "react-icons/tb";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const socials = [
    { href: "mailto:nikhil.kinvests@gmail.com", label: "Email", icon: BiLogoGmail },
    { href: "https://www.linkedin.com/in/nikhilkoyyada", label: "LinkedIn", icon: IoLogoLinkedin },
    { href: "https://github.com/nikhilkoyyada7868", label: "GitHub", icon: BsGithub },
  ];

  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello, <TypeAnimation
                sequence={[
                  'I am Nikhil Koyyada',
                  1000,
                  'I build AI-aware products',
                  1000,
                ]}
                speed={10}
                style={{ fontWeight:600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Product</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Manager
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Product Manager with an engineering foundation and an MBA from IIM Bangalore. I work across discovery, roadmaps, AI-enabled workflows, data-backed decisions, and technical execution to turn ambiguous problems into useful products.
          </motion.p>

          <motion.div
            className="grid grid-cols-3 gap-3 mt-6 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1 }}
          >
            {[
              ["35+", "features shipped"],
              ["100M+", "records secured"],
              ["700+", "case teams"],
            ].map(([value, label]) => (
              <div key={label} className="border-2 border-black rounded p-3">
                <p className="font-extrabold text-xl">{value}</p>
                <p className="text-[11px] lg:text-xs text-[#71717A] mt-1">{label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-4 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.a
              href="/assets/nikhil-koyyada-resume.pdf"
              download
              className="bg-black text-white px-4 py-3 rounded font-semibold flex items-center gap-x-3"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Resume <TbDownload size={18} />
            </motion.a>

            {socials.map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
