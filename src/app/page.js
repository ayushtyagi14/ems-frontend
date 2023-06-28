"use client";

import Contact from '@/components/Homepage/Contact'
import Feedback from '@/components/Homepage/Feedback'
import Footer from '@/components/Footer'
import Hero from '@/components/Homepage/Hero'
import NoBanner from '@/components/Homepage/NoBanner'
import WeWork from '@/components/Homepage/WeWork'
import Xbody from '@/components/Homepage/Xbody'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WeWork />
      <NoBanner />
      <Feedback />
      <Xbody />
      <Contact />
      <Footer />
    </>
  )
}
