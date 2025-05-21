"use client"

import type React from "react"
import { BrainCircuit, Filter, Newspaper } from "lucide-react"
import { motion } from "framer-motion"

export function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <FeatureCard
        icon={<Newspaper className="h-8 w-8 sm:h-10 sm:w-10 text-blue-400" />}
        title="Stay informed"
        description="Get the news that matters to you, personalized and relevant."
        variants={item}
      />
      <FeatureCard
        icon={<Filter className="h-8 w-8 sm:h-10 sm:w-10 text-purple-400" />}
        title="Cut through misinformation"
        description="Our AI helps identify bias and separate fact from fiction."
        variants={item}
      />
      <FeatureCard
        icon={<BrainCircuit className="h-8 w-8 sm:h-10 sm:w-10 text-teal-400" />}
        title="Understand the news on your terms"
        description="Customize your experience to match your interests and reading style."
        variants={item}
      />
    </motion.div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  variants,
}: {
  icon: React.ReactNode
  title: string
  description: string
  variants: any
}) {
  return (
    <motion.div
      className="group"
      variants={variants}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="h-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/5">
        <div className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-slate-800/50 inline-block">{icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-slate-300">{description}</p>
      </div>
    </motion.div>
  )
}
