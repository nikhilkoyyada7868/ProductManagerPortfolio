import { motion } from "framer-motion";
import { FaAws, FaDocker, FaJava } from "react-icons/fa";
import { BsClipboardData, BsDiagram3, BsKanban } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import { TbChartRadar, TbSparkles } from "react-icons/tb";

const skills = [
  { id: 1, name: "Product Strategy", icon: <BsKanban size={46} /> },
  { id: 2, name: "Data Analysis", icon: <BsClipboardData size={46} /> },
  { id: 3, name: "Design Thinking", icon: <CgFigma size={46} /> },
  { id: 4, name: "AI Prototyping", icon: <TbSparkles size={46} /> },
  { id: 5, name: "Process Improvement", icon: <BsDiagram3 size={46} /> },
  { id: 6, name: "Java", icon: <FaJava size={46} /> },
  { id: 7, name: "AWS", icon: <FaAws size={46} /> },
  { id: 8, name: "Docker", icon: <FaDocker size={46} /> },
];

const radarSkills = [
  { label: "Product", value: 92 },
  { label: "Data", value: 86 },
  { label: "AI Tools", value: 82 },
  { label: "Execution", value: 94 },
  { label: "Tech", value: 88 },
];

const timeline = [
  {
    period: "2024 - 2026",
    title: "MBA, IIM Bangalore",
    body: "Building a product management foundation through strategy, market research, case competitions, and live product projects.",
  },
  {
    period: "Apr 2025 - May 2025",
    title: "AFBP Program Manager Intern, Amazon",
    body: "Led root-cause analysis across fulfillment operations and proposed upstream classification mechanisms for better handling decisions.",
  },
  {
    period: "2020 - 2024",
    title: "Software Engineer, Lookout",
    body: "Partnered with PMs to deliver 35+ production features, improve performance, onboard enterprise customers, and reduce operational friction.",
  },
  {
    period: "2016 - 2020",
    title: "B.Tech, NIT Warangal",
    body: "Built the engineering base that now helps translate product ideas into realistic technical execution.",
  },
];

const achievements = [
  "Amazon PPO for internship impact",
  "Okta PM case PPI finalist",
  "National finalist, Kotak Campus case",
  "Employee of the Quarter at Lookout",
  "Intra-company hackathon winner",
];

export default function Skills() {
  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-base lg:text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-full max-w-44 flex flex-col items-center justify-center gap-4 text-center"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: skill.id * 0.06 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center mt-10 lg:mt-16">
          <motion.div
            className="border-2 border-black rounded p-5 lg:p-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <TbChartRadar size={26} />
              <h3 className="font-extrabold text-xl">Skill Radar</h3>
            </div>

            <div className="space-y-5 mt-6">
              {radarSkills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-3 border border-black rounded mt-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-black"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement) => (
              <div key={achievement} className="border border-zinc-300 rounded p-4 hover:border-black transition-colors">
                <p className="font-semibold">{achievement}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16" id="timeline">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Timeline</span>
        </motion.h2>

        <div className="px-5 lg:px-28 my-8 lg:mt-16 relative">
          <motion.div
            className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-[2px] bg-[#3F3F46] origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative grid lg:grid-cols-2 gap-5 pb-8 last:pb-0 ${
                index % 2 === 0 ? "lg:text-right" : "lg:text-left"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 12, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="absolute left-8 lg:left-1/2 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-black"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 12, delay: index * 0.14 }}
                viewport={{ once: true }}
              />

              <div className={`${index % 2 === 0 ? "lg:pr-12" : "lg:col-start-2 lg:pl-12"} ml-14 lg:ml-0`}>
                <div className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all">
                  <span className="text-[#D4D4D8] font-semibold text-sm">{item.period}</span>
                  <h3 className="font-semibold text-white text-lg lg:text-xl mt-2">{item.title}</h3>
                  <p className="text-[#D4D4D8] mt-3 text-sm/6 lg:text-base font-light">{item.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
