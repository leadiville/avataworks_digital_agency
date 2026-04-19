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
                "AI-accelerated brand concept exploration — AVATA-reviewed",

            ],
            webDev: [
                "Conversion-first website design & development",
                "Mobile app development — iOS & Android for startups",
                "CRM integration, lead capture & marketing automation",
                "Technical SEO, Core Web Vitals & Google-ready architecture",
                "E-commerce — Shopify, WooCommerce & custom builds",
                "Ongoing maintenance & performance optimisation",
            ],
            socialMediaMngt: [
                "Market research, customer avatar profiling & channel strategy",
                "Paid advertising: Meta, TikTok, YouTube, LinkedIn, Google Ads",
                "Content calendars, short-form video, copywriting & UGC",
                "Community management & micro-influencer activation",
                "CRM integration, email automation & performance dashboards",
                "AI-generated content — AVATA-reviewed before publishing",
            ]
        }
    ];
    return (
        <div className="service py-lg-5">
            <div className='p-0 my-5'>
                <EachCoreService header='Build a Brand That Speaks, Sells, and Stands Out.' subheader='Your brand is the first decision your customer makes before they contact you. We build brand identity systems — logos, visual language, brand guidelines, and creative strategy — tied directly to commercial intent. Every brand we build is engineered to improve ad performance, reduce customer acquisition cost, and build long-term equity and the Global markets.' whatWeBuild={servicesDeliver[0]?.creativeBranding} img={"/Marketing-rafiki.png"} title='Creative Strategy and Branding' key={3} />

                <EachCoreService header='Your Website Is Your 24/7 Salesperson.' subheader='Most business sites lose leads every day. We build high-performance websites, mobile applications, and landing pages — conversion-first, SEO-ready, CRM-integrated. Built to compete locally and grow globally.' img={"/Cross-platform software-bro.png"} whatWeBuild={servicesDeliver[0]?.webDev} title='Technology and Strategic Innovation' key={2} />

                <EachCoreService header='We Run Social Media Like a Revenue Engine' subheader='Not just content. A full growth operation. From paid advertising on Meta, TikTok, LinkedIn, and Google Ads, to organic content strategy, community management, and influencer partnerships. Every campaign tracked against CAC, ROAS, and pipeline generated — every naira optimised.' img={"/Marketing-avataworks.webp"} whatWeBuild={servicesDeliver[0]?.socialMediaMngt} title='Social Media Management' key={1} />
            </div>
        </div>
    );
}

export default CoreServices;