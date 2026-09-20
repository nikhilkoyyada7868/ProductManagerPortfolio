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
          I am a Product Manager with a strong engineering base and an MBA journey at IIM Bangalore. My work sits at the intersection of customer insight, data analysis, AI-assisted product building, and execution across cross-functional teams.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          At Amazon, I led root-cause analysis for recurring operational defects and translated fulfillment-center insights into scalable classification and early-detection recommendations. Before that, at Lookout, I partnered with Product Managers to ship 35+ production features and platform improvements across data, security, and infrastructure.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I like building fast, validating sharply, and turning ambiguity into structured product decisions. Recent projects explore MSME fintech, AI customer support, behavior tracking, and lightweight consumer experiences.
        </p>
      </motion.div>
    </div>
  );
}
