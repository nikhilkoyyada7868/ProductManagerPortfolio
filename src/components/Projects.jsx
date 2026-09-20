import { useMemo, useState } from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["All", "Fintech", "AI", "Automation", "Game"];

const projects = [
  {
    id: 1,
    title: "Vyapaar Mitra",
    category: "Fintech",
    description:
      "Designed a fintech concept to help MSMEs access working capital using alternate data signals and simplified credit assessment.",
    stack: ["Figma", "Product Research", "GST Data", "Account Aggregator", "Credit Logic"],
    image: "/assets/projects/vyapaar-mitra.png",
    link: "https://github.com/nikhilkoyyada7868/VyapaarMitra",
  },
  {
    id: 2,
    title: "WhatsApp Mood Tracker",
    category: "Automation",
    description:
      "Built a low-friction behavior tracking experience through WhatsApp to help users log moods and identify emotional patterns.",
    stack: ["WhatsApp API", "Twilio", "Automation", "Backend Logic", "AI Insights"],
    image: "/assets/projects/whatsapp-mood-tracker.png",
    link: "https://github.com/nikhilkoyyada7868/whatsapp-bot",
  },
  {
    id: 3,
    title: "AI Customer Support Chatbot",
    category: "AI",
    description:
      "Rapidly prototyped a customizable AI chatbot to handle customer queries and demonstrate low-cost support automation for SMBs.",
    stack: ["Google AI Studio", "Gemini", "Prompt Engineering", "GitHub", "API Backend"],
    image: "/assets/projects/ai-customer-support.png",
    link: "https://github.com/nikhilkoyyada7868/AI_Customer_Support",
  },
  {
    id: 4,
    title: "Flappy Bird Luxe Edition",
    category: "Game",
    description:
      "Built and deployed a browser-based game with custom mechanics, power-ups, personalization, and end-to-end launch execution.",
    stack: ["Cursor", "JavaScript", "HTML/CSS", "GitHub", "Netlify"],
    image: "/assets/projects/flappy-bird-luxe.png",
    link: "https://github.com/nikhilkoyyada7868/Pro-Flappy-Bird-Game",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter]
  );

  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mt-8 lg:mt-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`border rounded px-4 py-2 text-sm font-semibold transition-all ${
              activeFilter === filter
                ? "bg-white text-black border-white"
                : "bg-black text-white border-[#71717A] hover:border-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="lg:mt-16 mt-8 grid lg:grid-cols-2 gap-6 lg:gap-8 lg:pb-6 pb-3">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              className="border border-[#3F3F46] rounded-md overflow-hidden bg-black hover:bg-[#18181B] transition-colors"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ type: "spring", stiffness: 90, damping: 14 }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-white">
                <img
                  className="w-full h-full hover:scale-105 transition-all duration-500 object-cover"
                  src={project.image}
                  alt={`${project.title} project visual`}
                />
              </div>

              <div className="p-5 lg:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[#A1A1AA] text-sm font-semibold">{String(project.id).padStart(2, "0")}</p>
                    <h3 className="font-bold text-white text-xl lg:text-2xl mt-2">{project.title}</h3>
                  </div>
                  <span className="text-black bg-white rounded px-3 py-1 text-xs font-bold">{project.category}</span>
                </div>

                <p className="font-light text-sm/6 lg:text-base text-[#D4D4D8] mt-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((item) => (
                    <span key={item} className="text-[#D4D4D8] border border-[#3F3F46] rounded px-2 py-1 text-xs">
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="text-white mt-5 inline-flex items-center gap-2 font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub <TbExternalLink size={20} />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
