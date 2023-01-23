import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 left-auto uppercase tracking-[6px] text-pink-100  text-xl sm:text-2xl tracking-[20px] '>About</h3>
   
      <motion.img
        initial={{
          x:-200,
          opacity:0,
        }}
        transition={{
          duration:1.2,
        }}
        whileInView={{ opacity:1, x:0}}
        viewport={{once:true}}
        src='/images/tree.png'
        className="-mb-20 md:mb-0 flex-shrink-0 w-[30vw] h-[30vw] mt-10 rounded-full object-cover
         md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[520px] sm:h-56 sm:w-56 " 
      />
 
      <div className='space-y-5 px-0 md:px-10 sm:space-y-10'>
        <h4 className='text-2xl md:text-4xl font-semibold'>Here is a {" "} <span className='underline decoration-pink-300'>little</span>{" "}background</h4>
        <p className='text-base'>
        I am <span className="font-bold text-pink-100">LvDanyu</span>, majoring in Tea Science at <span className='font-bold text-pink-100'>Zhejiang university</span> now. <br />
​        During my college life, not only do I work hard in the courses of my own major, but also have learnt lots of courses about computer science, including: 
        <span className='font-bold text-pink-100'>C programming language |
        Data structures and algorithm |
        Computer networks |
        operating system |
        Database system. </span>
        <br/>
   
        </p>
        </div>
    </div>
  )
}