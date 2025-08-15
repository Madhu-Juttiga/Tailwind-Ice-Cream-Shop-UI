import React from 'react'
import Navbarsection from '../Tailblocks/Components/Navbarsection'
import HeroSection from '../Tailblocks/Components/HeroSection'
import ContentSection from '../Tailblocks/Components/ContentSection'
import GalarySection from '../Tailblocks/Components/GalarySection'
import HoverSection from '../Tailblocks/Components/HoverSection'
import FeatureSection from '../Tailblocks/Components/FeatureSection'
import Pricing from '../Tailblocks/Components/Pricing'
import Team from '../Tailblocks/Components/Team'
import Feedback from '../Tailblocks/Components/Feedback'
import Contact from '../Tailblocks/Components/Contact'
import FooterSection from '../Tailblocks/Components/FooterSection'
import HoverGallery from '../Tailblocks/Components/HoverGallery'

const Landingpage = () => {
  return (
    <div>
        <Navbarsection/>
        <HeroSection/>
        <ContentSection/>
        <GalarySection/>
        {/* <HoverGallery/> */}
        <HoverSection/>
        <FeatureSection/>
        <Team/>
        <Feedback/>
        <Contact/>
        <FooterSection/>

    </div>
  )
}

export default Landingpage