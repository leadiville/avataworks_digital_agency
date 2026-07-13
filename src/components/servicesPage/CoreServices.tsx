import Badge from '../Badge';
import EachCoreService from './EachCoreService';

const CoreServices = () => {
    const servicesDeliver = [
        {
            creativeBranding: [
                "Brand strategy, positioning & competitive differentiation",
                "Logo systems, typography, colour palettes & brand guidelines",
                "Brand voice, messaging hierarchy & content tone frameworks",
                "Ad creative systems aligned to performance marketing goals",
                "Launch campaigns, pitch decks & brand activation assets",
                "AI-accelerated brand concept exploration — Avata-reviewed",

            ],
            webDev: [
                "Conversion-first website design & development",
                "Mobile app development — iOS & Android for startups",
                "CRM integration, lead capture & marketing automation",
                "AI agents & intelligent automation workflows",
                "Technical SEO, Core Web Vitals & Google-ready architecture",
                "E-commerce — Shopify, WooCommerce & custom software solutions",
                "Ongoing maintenance & performance optimisation",
            ],
            socialMediaMngt: [
                "Market research, customer avatar profiling & channel strategy",
                "Paid advertising: Meta, TikTok, YouTube, LinkedIn, Google Ads",
                "Content calendars, short-form video, copywriting & UGC",
                "Community management & micro-influencer activation",
                "CRM integration, email automation & live performance dashboards",
                "AI-augumented content engines - Avata-reviewed before publishing",
            ]
        }
    ];
    return (
        <div className="service py-lg-5">
            <div className='p-0 my-5'>
                <div className="d-flex justify-content-center w-100">
                    <p className="text-primary fs-4 bg-inherit rounded border-bottom border-primary p-3 py-1 d-inline-block text-center w-fit">Our Services</p>
                </div>
                <EachCoreService header='AI-Accelerated Brand Strategy and Creative Design That Speaks, Sells, and Stands Out.' subheader='Your brand is the first decision your ideal customer avatar makes before they contact you. We build brand identity systems, logos, visual language, brand guidelines, and creative strategy tied directly to commercial intent. AI handles the speed, volume, and data. Our Human-In-The-Loop (HITL) Avatas handles the strategy, creativity, and cultural intelligence for your market. You get both speed and quality. Every brand we build is engineered to improve ad performance, reduce customer acquisition cost, and build long-term equity in the global markets.' whatWeBuild={servicesDeliver[0]?.creativeBranding} img={"/Marketing-rafiki.png"} title='Branding and Creative Strategy' key={3} />

                <EachCoreService header='High-Performance Websites, Mobile Apps, and AI Automation Systems for Business Growth.' subheader='Your website is your 24/7 salesperson, but most business sites lose leads every day. Avataworks builds differently: conversion-first websites, iOS and Android mobile apps, and AI automation systems. Every multi-agent workflow system and custom software build is SEO-ready from day one, Core Web Vitals-optimized for Google ranking, and integrated with CRM and lead capture systems that feed directly into your pipeline. Our Avatas build software solutions and AI systems that meet specific business needs, ensuring your digital brand is optimized for growth, engagement, and success.' img={"/Cross-platform software-bro.png"} whatWeBuild={servicesDeliver[0]?.webDev} title='Technology and Strategic Innovation' key={2} />

                <EachCoreService header='AI-Powered social media marketing. Not just a content engine, but a revenue engine.' subheader='Avataworks manages your social media presence as a full growth operation: AI-augmented content at scale across Meta, TikTok, LinkedIn, and X; paid advertising tracked against ROAS and cost-per-lead; community management; and monthly performance dashboards. Our Avatas HITL reviews, approves, and implements AI-driven strategies like SEO, PPC, and social media marketing that turns your brand into a revenue engine 24/7.' img={"/Marketing-avataworks.webp"} whatWeBuild={servicesDeliver[0]?.socialMediaMngt} title='Social Media Management' key={1} />
            </div>
        </div>
    );
}

export default CoreServices;