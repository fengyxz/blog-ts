import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
      initial={{
        opacity:0,
      }}
      animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%","20%","50%","88%","20%"],
      }}
      transition={{
        duration:2.5,
      }}
      className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] h-[200px] w-[200px] mt-52 rounded-full animate-ping'/>
      <div className='absolute border border-[#333333] h-[300px] w-[300px] mt-52 rounded-full'/>
      <div className='absolute border border-[#333333] h-[500px] w-[500px] mt-52 rounded-full'/>
      <div className='absolute border border-pink-200 opacity-20 h-[650px] w-[650px] mt-52 rounded-full animate-pulse'/>
    </motion.div>
  )
}

export default BackgroundCircles