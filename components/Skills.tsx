"use client"

import { motion } from "framer-motion"
// import { Database, FileJson, Flame, Github, Layout } from "lucide-react"
import { FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaNodeJs,FaGithub  } from "react-icons/fa";
import { SiTailwindcss, SiDaisyui,SiFirebase,SiMongodb,SiExpress,SiVercel} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={40} className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-500" /> },
    {name: "React", icon: <FaReact size={40} className="text-blue-500" />},
    {
      name: "Tailwind",
      icon: <SiTailwindcss size={40} className="text-blue-500"/>},
    {
      name: "Daisy UI",
      icon: <SiDaisyui size={40} className="text-purple-500"/>},
    {
      name: "Firebase",
      icon: <SiFirebase size={40} className="text-yellow-500"/>},
    { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress size={40} className="text-gray-500" /> },
    {
      name: "Vercel",
      icon: <SiVercel size={40} className="text-gray-500"/>,
    },
    { name: "Git", icon: <FaGithub size={40} className="text-red-500" /> },
  ]

  return (
    <section className="py-20 bg-zinc-950 w-11/12 mx-auto">
      <div className="container mx-auto px-4 mx-2">
        <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-tighter">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                <div className="relative p-4 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">{skill.icon}</div>
              </div>
              <span className="mt-4 text-sm font-medium text-zinc-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

