import Link from 'next/link'
import PrimaryButton from '../PrimaryButton'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type bannerT = {
    title: string;
    subtitle?: string;
    buttonText: string;
    icon?: IconDefinition | string;
    isWideBanner?: boolean;
    style?: string;
}
const Banner = ({ title, subtitle, buttonText, icon, isWideBanner, style }: bannerT) => {
    return (
        <div className="bg-primary">
            <section className={`${isWideBanner ? 'py-4' : 'py-5'}`}>
                <div className="container text-center align-items-center text-white">
                    {
                        // isWideBanner ? <marquee direction="right">
                        //     <h2 className='d-inline-block'>{title}</h2></marquee> : 
                        <h2 className=''>{title}</h2>}
                    {subtitle && <div className="d-flex justify-content-center align-items-center">
                        <p className={`${!isWideBanner ? 'col-lg-5' : 'col-12 py-lg-2'} text-lighter `}>{subtitle}</p>
                    </div>}
                    <Link href={'/get-quote'} className={`${isWideBanner && 'd-none'} col-lg-5 col-12`}><PrimaryButton text={buttonText} className="btn btn-white mt-4" icon={icon as IconDefinition} /></Link>
                </div>
            </section >
        </div>
    )
}

export default Banner;