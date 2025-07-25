
import React from 'react'
import HeroSection from '@/components/HeroSection'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { TimelineSection } from '@/components/Timeline'
import CardSpotlightDemo from '@/components/CardSpotlightDemo'
import Footer from '@/components/footer'
import { Navbar } from '@/components/Navbar'
import { BackgroundLinesDemo } from '@/components/BackgroundDemo'




function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <TimelineSection />
      <CardSpotlightDemo />
      <BackgroundLinesDemo />
      <Footer />
    
    </div>
  )
}

export default page
