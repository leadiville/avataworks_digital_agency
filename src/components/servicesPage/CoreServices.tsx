import EachCoreService from './EachCoreService';

const CoreServices = () => {
    const servicesDeliver = [
        {
            socialMediaMngt: [
                "Market and audience research: customer avatar profiling, competitor analysis, and channel strategy for the African market",
                "Paid advertising management: A/B testing and weekly optimization across Meta, TikTok, YouTube, LinkedIn, and Google",
                "Content creation and marketing: content calendars, short-form video, copywriting, platform-native creatives, and SEO blog strategy",
                "Community and influencer activation: creator partnerships, micro-influencer programs, and community funnel management",
                "CRM and marketing automation: integrations, lead pipeline management, email automation, and monthly performance dashboards"

            ],
            webDev: [
                "Conversion-first website design and development — landing pages, corporate websites, WordPress, and e-commerce platforms", "Mobile app development — iOS and Android applications for ambitious brands",
                "CRM integration and lead capture systems — HubSpot, Salesforce, and custom integrations for automated lead management",
                "Technical SEO and site performance — page speed optimization, structured data, Core Web Vitals, and Google-ready architecture",
                "Ongoing maintenance and optimization — monthly performance reviews, iteration cycles, and support for scaling teams"
            ],
            creativeBranding: [
                "Brand strategy and positioning: competitive differentiation, audience research, and go-to-market messaging",
                "Visual identity design: logo systems, typography, colour palettes, brand guidelines, and asset libraries", "Brand voice and content frameworks: messaging hierarchy, tone of voice, and content guidelines", "Ad creative systems: high-performing creative aligned to your paid media and performance marketing goals",
                "Launch campaigns and brand activations: pitch decks, event assets, and go-to-market campaign creative"
            ]
        }
    ];
    return (
        <div className="container service py-5">
            {/* <h2 className="text-danger text-center p-2">Who are we?</h2> */}
            <div className="text-center mx-auto wow fadeInUp bg-primary p-lg-5 p-4 mb-5 rounded rounded-full">
                <h2 className="mb-4 text-white">We are brand builders for hire!</h2>
                <h5 className="mb-0 text-white px-lg-5">AVATAWorks digital agency is a growth engine and Managed Marketing Service Provider (MMSP) for startups and ambitious brands. We build brands, execute conversion-ready digital transformations, and operate growth systems with Avatas across social media, creative strategy & branding, website & app development.
                </h5>
            </div>
            <div className='my-lg-5 py-lg-5'>
                <h3 className="text-dark text-center text-decoration-underline text-uppercase">Explore our services</h3>
                <EachCoreService header='Social Media Management' subheader='AVATAWorks is a paid media and social media marketing agency in Nigeria. We drive growth for startups and brands in Africa. We deliver digital brand success through organic growth marketing operations, customer avatar acquisition, content creation and user-generated content for e-commerce. Managing community systems that convert attention into qualified leads and revenue.' img={"/VirtualAssist.png"} whatWeBuild={servicesDeliver[0]?.socialMediaMngt} />
                <EachCoreService header='Technology & Strategic Innovation' subheader='AvataWorks is a Tech Innovation agency in Nigeria. We build websites and custom mobile app development that are engineered for growth. We design Landing pages, CRM-integrated websites, WordPress websites, and analytics to turn your digital assets into a reliable revenue channel.' img={"/Cross-platform software-bro.png"} whatWeBuild={servicesDeliver[0]?.webDev} />
                <EachCoreService header='Creative Strategy & Branding' subheader='AVATAWorks crafts brand identity for startups in Africa. We create brand playbooks, visual designs, and creative branding services to align messaging and improve ad creative, ad copy, and video production for performance marketing and long-term digital brand success' whatWeBuild={servicesDeliver[0]?.creativeBranding} img={"/Marketing-rafiki.png"} />
            </div>
        </div>
    );
}

export default CoreServices;