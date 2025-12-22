import { Ifeatures } from '@/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface FeaturesProps {
    featuresData: Ifeatures[];
    title: string;
}
const Features = ({ featuresData, title }: FeaturesProps) => {
    return (
        <div>
            {/* Feature Start  */}
            <div className="container-fluid feature bg-light py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
                        <h4 >Our Features</h4>
                        <h2 className="text-primary mb-4">{title}</h2>
                        <p className="mb-0">At AVATAWorks, we don&apos;t just offer services—we deliver transformative solutions tailored to your business needs. As your all-in-one Advanced Virtual Assistant in Technology and Advertising, we combine creativity, technology, and strategy to help brands scale faster, stronger, and smarter.
                        </p>
                    </div>
                    <div className="row g-4">
                        {featuresData?.map((ftData, ftDataInx) => {
                            const { title, info, icon } = ftData;
                            return (
                                <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" key={ftDataInx}>
                                    <div className="feature-item p-4 pt-0" style={{ maxHeight: '320px' }}>
                                        <div className="feature-icon p-4 mb-4">
                                            <i><FontAwesomeIcon icon={icon} width={30} height={30} style={{ width: '50px', height: '50px' }} /></i>
                                        </div>
                                        <h4 className="mb-4" style={{ fontWeight: 600 }}>{title}</h4>
                                        <p className="mb-0 text-black-5">{info}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* Feature End  */}

        </div >
    )
}

export default Features