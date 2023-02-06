import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function Projects({}: Props) {
  const projects = [1,2,3,4,5]
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='z-20 absolute top-20 left-auto uppercase tracking-[6px] text-pink-100  text-xl sm:text-2xl tracking-[20px] '>
     Projects
    </h3>

      <div className='relative -pt-10 w-full flex overflow-x-scroll overflow-y-hidden snap-x
      snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-pink-100/80'>
        {
          projects.map((project,i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <motion.img
                initial={{
                  y:-300,
                  opacity:0,
                }}
                transition={{duration:1.2}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                src="images/vsc.png"
                alt=""
                width={350}
              />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-3xl xl:text-4xl font-semibold text-center'>
                  <span className='underline decoration-pink-300/75'>
                  Case Study {i+1} of {projects.length}:
                  </span>
                  Shareme
                </h4>
                <p className='text-lg text-center md:text-left'>
                  test test testttttttttttttest test testttttttttttttest test testttttttttttttest test testttttttttttttest test testttttttttttttest test testttttttttttttest test testtttttttttttvtest test testttttttttttttest test testttttttttttt
                </p>
              </div>
            </div>

            
          ))
        }
      </div>

      <div className='w-full absolute top-[20%] bg-pink-300/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects