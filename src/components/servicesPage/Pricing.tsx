"use client";
import { useState } from 'react'
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimate from '@/utils/ScrollAnimate';

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
        type: "Brand Startup",
        price: "₦400K",
        accessibility: "/month · 2 platforms",
        about: "For businesses establishing a consistent digital presence.",
        benefits: ["40 posts/month", "Instagram + Facebook", "Logos, Visuals & captions", "AI augumented content - Avata-reviewed", "Content calendar + scheduling", "Basic monthly summary report"
        ],
    },
    {
        ourPlans: "Entrepreneur",
        type: "Growth Partner",
        price: "₦1.2M",
        accessibility: "/month · 4 platforms",
        about: "For brands actively acquiring customers at volume.",
        benefits: ["Everything in Startup Pack", "Linkedin + TikTok", "Paid ads, 1 platform (AI-optimized)", "Lead capture & CRM automation", "Priority Avata squad", "Monthly performance reports",
        ],
    },
    {
        ourPlans: "Enterprise",
        type: "Enterprise Avata",
        price: "₦2.5M",
        accessibility: "/month · 6 platforms",
        about: "Full AI-native growth infrastructure for high-growth companies.",
        benefits: ["Everything in Entrepreneur", "Paid ads: Meta + Google + TikTok + LinkedIn", "Custom AI brand voice model", "Agentic Workflows/Quarterly website builds", "Voice AI outreach & automation", "Dedicated Avata squad", "White-label reporting & dashboards",
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
                    <div className="badge"><span className="bdot"></span>{"Now accepting clients"}</div>
                    <h2 className='text-primary'>Productized Plans for<br /> Businesses</h2>
                    <p>Fixed price AI marketing plans for ambitious brands.<br /> Now accepting clients.</p>
                </div>
                <div className="pg-grid">
                    {pricing?.map((each, eachInx) => {

                        const { ourPlans, type, price, accessibility, about, benefits } = each;
                        return (
                            <div>
                                <ScrollAnimate>

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
                                        <Link href="/get-quote"><PrimaryButton className={`btn w-100 ${eachInx === 1 ? "btn-primary" : "btn-white"}`} icon={faArrowRight} text="Get Started" /></Link>
                                    </div>
                                </ScrollAnimate >
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pricing
