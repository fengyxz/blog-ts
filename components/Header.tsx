import React,{useState }from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Overlay from './Overlay';

type Props = {}

export default function Header({}: Props) {

  const [visible,setVisible] = useState(false);
  const open = () => {
    setVisible(true);
  }
  const close = () => {
    setVisible(false);
  }

  return (
    <header className='flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
      initial={{
        x: -500,
        opacity:0,
        scale:0.5,
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1,
      }}
      transition={{
        duration:1.5,
      }}
      className='flex flex-row items-center'>
      <SocialIcon url="https://github.com/fengyxz" 
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon network="wechat"
        className='cursor-pointer'
        fgColor="gray"
        bgColor="transparent"  
        id='wechat'    
        onClick={open}
        />
      <SocialIcon url="mailto:lvdanyu37@gmail.com"  
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon url="https://www.youtube.com/channel/UCPcN-zCm6PHhgQuyEH8bxvw"
        fgColor='gray'
        bgColor='transparent'
      />
      </motion.div> 
      {/* social icons */}
      <motion.div 
        initial={{
          x: 500,
          opacity:0,
          scale:0.5,
        }}
        animate={{
          x:0,
          opacity:1,
          scale:1,
        }}
        transition={{duration:1.5}}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Get In Touch
        </p>
      </motion.div>
       {/* TODO: Type '{ close: () => void; }' is not assignable to type 'IntrinsicAttributes'. */}
      {visible && <Overlay close={close} />}
    </header>
  )
}