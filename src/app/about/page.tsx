import React from "react"
import Navbar from "../components/Navbar"
import Features from "../components/homePage/Features"
import AboutUs from "../components/homePage/AboutUs"
import Faq from "../components/homePage/Faq"
import Team from "../components/homePage/Team"
import Footer from "../components/Footer"

export default async function () {

    const request = await fetch('http://localhost:3000/database');
    const response = await request.json();
    const data = response;
    const { features, whyChooseUs, ourTeam, faq } = data;
    console.log(features, faq.servicesPage)
    return (
        <>
            <Navbar />
            {/* hero section */}
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h4 className="text-primary display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Avataworks</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item text-warning text-danger"><a href="#">Get a quote</a></li>
                        <li className="breadcrumb-item active">Speak to an avata</li>
                    </ol>
                </div>
            </div>
            <AboutUs />
            <Features featuresData={features} title={'At Avataworks, we ensure digital brand success'} />
            <Faq faqs={faq.servicePage} />
            {/* contact us */}
            <Team teamMembers={ourTeam} />
            <Footer />
        </>
    )
}