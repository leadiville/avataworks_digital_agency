import Link from 'next/link'
import PrimaryButton from '../PrimaryButton'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type bannerT = {
    title: string;
    subtitle: string;
    buttonText: string;
    icon?: IconDefinition | string;
}
const Banner = ({ title, subtitle, buttonText, icon }: bannerT) => {
    return (
        <section className="bg-primary w-100">
            <div className="text-white py-5">
                <div className="container text-center py-5 align-items-center">
                    <h2>{title}</h2>
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <p className='col-lg-5 col-12 py-lg-2 text-white'>{subtitle}</p>
                        </div>
                    </div>
                    <Link href={'/get-quote'} className='col-lg-5 col-12'><PrimaryButton text={buttonText} className="btn btn-white" icon={icon as IconDefinition} /></Link>
                </div>
            </div>
        </section >
    )
}

export default Banner;