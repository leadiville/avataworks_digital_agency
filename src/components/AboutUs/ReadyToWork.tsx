import Link from 'next/link'
import PrimaryButton from '../PrimaryButton'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type bannerT = {
    title: string;
    subtitle: string;
    buttonText: string;
    icon?: IconDefinition | string;
    isWideBanner?: boolean;
}
const Banner = ({ title, subtitle, buttonText, icon, isWideBanner }: bannerT) => {
    return (
        <div className="bg-primary mt-5">
            <section className={`${isWideBanner ? 'py-4' : 'py-5'}`}>
                <div className="container text-center align-items-center text-white">
                    <h2>{title}</h2>
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <p className={`${!isWideBanner ? 'col-lg-5' : 'col-12 py-lg-2'} text-lighter `}>{subtitle}</p>
                        </div>
                    </div>
                    {!isWideBanner && <Link href={'/get-quote'} className='col-lg-5 col-12'><PrimaryButton text={buttonText} className="btn btn-white" icon={icon as IconDefinition} /></Link>}
                </div>
            </section >
        </div>
    )
}

export default Banner;