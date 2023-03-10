import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className='z-20 absolute top-20 left-auto uppercase tracking-[6px] text-pink-100  text-xl sm:text-2xl tracking-[20px] '>
        Experience
      </h3>
      <div className='absolute top-5 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        {/* card */}
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
      </div>
    </motion.div>
  )
}