import { faMailForward, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';


interface ICoreServices {
    header: string;
    subheader: string;
    img: string;
    listItems: string
}

const EachCoreService = ({ header, subheader, img, listItems }: ICoreServices) => {
    return (
        <div className='container mt-5'>
            <div className="container text-center">
                <h2 className='text-primary my-3'>
                    {header}
                </h2>
                <h5 className="text-grey">{subheader}</h5>
            </div>
            <div className="row gap-0 my-md-5">
                <div className="col-lg-4">
                    <Image src={img} width={500} height={500} alt='service-image' className='w-100 h-auto' />
                </div>
                <div className="col-lg-8">
                    <div >
                        <h4 className="text-primary"><FontAwesomeIcon className='me-2' icon={faMailForward} />What we deliver</h4>
                        <ul style={{ color: "grey" }}>
                            <li className='my-lg-1' >Brand Strategy Planning: <br /> Market & audience research, Conversion funnel design and KPI roadmap, Channel selection and media mix planning.</li>
                            <li className='my-lg-1'>Paid Advertising: <br />  A/B testing, ad campaign optimization across Meta ads, TikTok Ads, YouTube Ads, LinkedIn Ads, Google Ads.</li>
                            <li className='my-lg-1'>Content Creation & Marketing: <br /> content calendars, video production, copywriting & ghostwriting, blogs, user generated content, platform optimization, SEO, and distribution playbooks
                            </li>
                            <li className='my-lg-1'>Community & Influencer Activation: <br /> Community & Influencer Activation — creator partnerships, micro-influencer programs, and community funnels.</li>
                            <li className='my-lg-1'>Automation & Analytics: <br /> CRM integrations, Lead Management & Sales Pipeline, Email & Marketing Automation, dashboarding and monthly performance reporting</li>
                        </ul>
                    </div>
                    <Link href={"/get-quote"} ><PrimaryButton text='Get Quote' className='btn btn-danger p-3 px-5 my-5 rounded text-center'  icon={faPen} /></Link>
                </div>
            </div>
        </div>
    )
}

export default EachCoreService