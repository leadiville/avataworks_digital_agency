import React from "react"
import Navbar from "../components/Navbar"
import Features from "../components/homePage/Features"
import AboutUs from "../components/homePage/AboutUs"
import Faq from "../components/homePage/Faq"
import Team from "../components/homePage/Team"
import Footer from "../components/Footer"
import { WelcomeAbout } from "../components/AboutUs/WelcomeAbout"
import { AboutGoals } from "../components/AboutUs/AboutGoals"
// import AboutHero from "../components/AboutUs/AboutHero"

export default async function () {

    const request = await fetch('http://localhost:3000/database');
    const response = await request.json();
    const data = response;
    const { features, whyChooseUs, ourTeam, faq, footer } = data;
    console.log(features, faq.servicesPage)
    return (
        <>
            <Navbar />
            <WelcomeAbout />
            <Features featuresData={features} title={'At Avataworks, we ensure digital brand success'} />
            <AboutUs />
            <Faq faqs={faq.servicePage} />
            <Team teamMembers={ourTeam} />
            {/* <AboutGoals /> */}
            <Footer footer={footer} />
        </>
    )
}