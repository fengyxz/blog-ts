import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='mt-20 flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] snap-center bg-[#292929] p-5 opacity-40 
    hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y:-100,
          opacity:0,
        }}
        transition={{ duration:1.2 }}
        whileInView={{ opacity:1,y:0 }}
        viewport={{ once:true}}
        className="w-20 h-20 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="images/me.jpg"
        alt="me"
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>QA of Fliggy</h4>
        <p className='font-bold text-xl mt-1'>Alibaba</p>
        <div
        className='flex space-x-2 my-2'
        >
          <img
          className='h-10 w-10 rounded-full object-cover'
          src="images/Fliggy.jpeg"
          alt=""
          />

        </div>

        <p className='uppercase py-5 text-gray-300'> 
          Strated work ... - Ended...
        </p>

        <ul className='list-disc space-y-4 ml-5 text-md'>
          <li>负责飞猪客户端/服务端/小程序等产品质量保障和研发效能提升，用户体验改进工作</li>
          <li>优化测试流程，建设测试工具</li>
        </ul>
      </div>
      
    </article>
  )
}