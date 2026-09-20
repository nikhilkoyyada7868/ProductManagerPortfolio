import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          className="w-full max-w-sm lg:max-w-md aspect-square object-cover rounded-lg border border-zinc-200 shadow-sm"
          src="/assets/about-portrait.png"
          alt="Portrait of Nikhil Koyyada"
        />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am a Product Manager with a strong engineering base and an MBA from IIM Bangalore. My work sits at the intersection of customer insight, data analysis, AI-assisted product thinking, and execution across cross-functional teams.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I bring product judgment with enough technical depth to work closely with engineers on APIs, data systems, AI workflows, evaluation loops, and scalable delivery. Before moving deeper into product, I shipped customer-facing features and platform improvements across data, security, and cloud infrastructure at Lookout.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I like building fast, validating sharply, and turning ambiguity into structured product decisions. Recent public projects explore MSME fintech, AI customer support, behavior tracking, and lightweight consumer experiences.
        </p>
      </motion.div>
    </div>
  );
}
