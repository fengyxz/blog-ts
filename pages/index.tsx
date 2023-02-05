import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-pink-100/80'>
      <Head>
        <title>Antik&apos;s Portfolio</title>
      </Head>
      <div className='z-30 sticky top-0 p-5'>
        <Header/>
      </div>
      

      <section id="hero" className='snap-center pt-20'>
      <Hero/>
      </section>


      {/* About */}
      <section id="about" className="snap-center">
        <About/>
      </section>
      {/* Experience */}
      <section id="experience" className='snap-center'>
      <Experience/>
      </section>
      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills/>
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects/>      
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-center'>
        <ContactMe/>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className='flex flex-row-reverse'>
            <img 
              className='mx-10 h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="images/fyxz.jpg"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
