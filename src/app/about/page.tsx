import React from "react"
import Navbar from "../components/Navbar"
import Features from "../components/homePage/Features"
import AboutUs from "../components/homePage/AboutUs"
import Faq from "../components/homePage/Faq"
import Team from "../components/homePage/Team"
import Footer from "../components/Footer"
// import AboutHero from "../components/AboutUs/AboutHero"

export default async function () {

    const request = await fetch('http://localhost:3000/database');
    const response = await request.json();
    const data = response;
    const { features, whyChooseUs, ourTeam, faq } = data;
    console.log(features, faq.servicesPage)
    return (
        <>
            <Navbar />
            <AboutUs />
            <Features featuresData={features} title={'At Avataworks, we ensure digital brand success'} />
            <Faq faqs={faq.servicePage} />
            <Team teamMembers={ourTeam} />
            <Footer />
        </>
    )
}