import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
// import Overlay from '@/components/Overlay'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Antik's Portfolio</title>
      </Head>

      <Header/>
      {/* <Overlay/> */}
      <section id="hero" className='snap-center pt-20'>
      <Hero/>
      </section>
      {/* Hero */}

      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}

    </div>
  )
}
