import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
// import Overlay from '@/components/Overlay'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
      {/* Contact Me */}

    </div>
  )
}
