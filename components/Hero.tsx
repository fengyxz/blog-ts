import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
  const [text,count] = useTypewriter({
    words:[
      "Hi, The Name's Lv Danyu",
      "Girl-who-loves-Tea.tsx",
      "<ButLovesToCodeMore />"
    ],
    loop:true,
    delaySpeed:2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center 
    text-center overflow-hidden'>
      <BackgroundCircles/>
      <img
        className='relative rounded-full h-36 w-36 mx-auto object-cover'
        src="/images/fyxz.jpg"
        alt='my photo'
      />
      <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#95818D'/>
        </h1>

        <div>
          <button className='heroButton'>About</button>
          <button className='heroButton'>Experience</button>
          <button className='heroButton'>Skills</button>
          <button className='heroButton'>Projects</button>

        </div>
      </div>
    </div>
  )
}