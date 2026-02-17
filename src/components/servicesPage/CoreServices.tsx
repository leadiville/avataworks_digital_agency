import EachCoreService from './EachCoreService';

const CoreServices = () => {
    return (
        <div className="container service py-5">
                {/* <h2 className="text-danger text-center p-2">Who are we?</h2> */}
            <div className="text-center mx-auto wow fadeInUp bg-primary p-lg-5 p-4 mb-5 rounded rounded-full">
                <h2 className="mb-4 text-white">We are brand builders for hire.<br /> We fuel your growth engine so you can focus on the vision.</h2>
                <h5 className="mb-0 text-white px-lg-5">AVATAWorks digital agency is a growth engine and Managed Marketing Service Provider (MMSP) for startups and ambitious brands. We build brands, execute conversion-ready digital transformations, and operate growth systems with Avatas across social media, creative strategy & branding, website & app development.
                </h5>
            </div>
            <div className='my-lg-5 py-lg-5'>
                <h3 className="text-primary text-center underline">Our services</h3>
                <EachCoreService header='Social Media Management' subheader='AVATAWorks is a paid media and social media marketing agency in Nigeria. We drive growth for startups and brands in Africa. We deliver digital brand success through organic growth marketing operations, customer avatar acquisition, content creation and user-generated content for e-commerce. Managing community systems that convert attention into qualified leads and revenue.' img={"/Marketing-amico.png"} listItems='' />
                <EachCoreService header='Technology & Strategic Innovation' subheader='AvataWorks is a Tech Innovation agency in Nigeria. We build websites and custom mobile app development that are engineered for growth. We design Landing pages, CRM-integrated websites, WordPress websites, and analytics to turn your digital assets into a reliable revenue channel.' img={"/Cross-platform software-bro.png"} listItems='' />
                <EachCoreService header='Creative Strategy & Branding' subheader='AVATAWorks crafts brand identity for startups in Africa. We create brand playbooks, visual designs, and creative branding services to align messaging and improve ad creative, ad copy, and video production for performance marketing and long-term digital brand success' listItems='' img={"/Marketing-rafiki.png"} />
            </div>
        </div>
    );
}

export default CoreServices;