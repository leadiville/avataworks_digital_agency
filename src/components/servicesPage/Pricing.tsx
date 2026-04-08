"use client";
import { useState } from 'react'
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface PricingI {
    ourPlans: string;
    type: string;
    price: number | string;
    accessibility: string;
    about: string;
    benefits: string[];
}
const pricingData = [
    {
        ourPlans: "Startup Pack",
        type: "Brand Starter",
        price: "₦350K",
        accessibility: "/month · 1 brand",
        about: "For Nigerian businesses establishing a consistent digital presence.",
        benefits: ["30 AI content drafts/month", "Logos, captions & carousels", "AI brand voice calibration", "2 platforms — IG + Facebook", "Content calendar + scheduling", "AVATA approval before posting", "Basic monthly summary report"
        ],
    },
    {
        ourPlans: "Entrepreneur",
        type: "Growth Partner",
        price: "₦850K",
        accessibility: "/month · 4 platforms",
        about: "For brands actively acquiring customers at volume across Nigeria.",
        benefits: ["Everything in Startup Pack", "4 platforms — IG, FB, TikTok, X", "Meta Ads optimisation via Madgicx", "Lead capture & CRM automation", "Branding + creative strategy", "Priority AVATA team", "White-label performance reports",
        ],
    },
    {
        ourPlans: "Enterprise",
        type: "AVATA",
        price: "₦1.7M",
        accessibility: "/month · Unlimited brands",
        about: "Full AI-native growth infrastructure for high-growth African companies.",
        benefits: [
            "Full AVATA stack",
            "All 6 platforms managed",
            "Unlimited AI content drafts",
            "Website + landing page builds",
            "Voice AI outreach via Vapi",
            "Custom AI brand voice model",
            "Dedicated AVATA squad",
        ],
    }
]
const Pricing = () => {
    const pricing: PricingI[] = pricingData;
    return (
        // < !--PRICING -- >
        <section className="sec sec-alt bg-primaryLight position-relative z-1">
            <div className="c position-relative">
                <div className="sec-hdr">
                    <div className="badge"><span className="bdot"></span>{"coming soon"}</div>
                    <h2 className='text-primary'>Productized Plans for<br />Nigerian Businesses</h2>
                    <p>Fixed pricing. Defined deliverables. No hidden retainer fees. Join the waitlist for early-access pricing.</p>
                </div>
                <div className="pg-grid">
                    {pricing?.map((each, eachInx) => {

                        const { ourPlans, type, price, accessibility, about, benefits } = each;
                        return (
                            <>
                                <div className="pc positon-relative" key={eachInx}>
                                    {eachInx === 1 &&
                                        <div className='w-fit position-absolute top-0 translate-middle start-50' >
                                            <small className="text-uppercase bg-primary text-white rounded-pill px-4 py-1 ">
                                                Most Popular
                                            </small>
                                        </div>}
                                    <div className="pt">{ourPlans}</div>
                                    <div className="pn">{type}</div>
                                    <sup className='me-2'>Starting from -</sup><span className="pa text-primary">{price}</span>
                                    <div className="pp">{accessibility}</div>
                                    <div className="pd">{about}</div>
                                    <ol className="pf">
                                        {benefits?.map((each, inx) => (<li key={inx}>{each}</li>))}
                                    </ol>
                                    <Link href="/get-quote"><PrimaryButton className={`btn w-100 ${eachInx === 1 ? "btn-primary" : "btn-white"}`} icon={faArrowRight} text="Join Waitlist " /></Link>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing
