"use client";
import { Ifeatures } from '@/types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import FeatureCard from './FeatureCard';

interface FeaturesProps {
    featuresData: Ifeatures[];
    title: string;
}
const Features = ({ featuresData, title }: FeaturesProps) => {
    const ref = useRef<null | HTMLDivElement>(null);
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        const activateCss = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect(); // get the shape of the rect from ref
            const windowCenter = window.innerHeight / 2; // Get the center of the window(screen/visuals)
            // check if the rect is centered on window then activate
            const rectCenter = rect.top + rect.height / 2;
            if ((windowCenter - rectCenter) <= 50) {
                setActive(true)
            } else {
                setActive(false);
            }
        }
        window.addEventListener("scroll", activateCss);
        return () => window.removeEventListener("scroll", activateCss);
    }, []);


    return (
        <div>
            {/* Feature Start  */}
            <div className="container-fluid feature bg-light pt-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
                        <h2 className="text-primary">{title}</h2>
                        <p className="mb-0 p-4">At AVATAWorks, we don&apos;t just offer services—we deliver transformative solutions tailored to suite your brand needs. As your all-in-one Advanced Virtual Assistant in Technology and Advertising, we combine creativity, technology, and strategy to help brands scale faster, stronger, and smarter.
                        </p>
                    </div>
                    <div className="row g-4">
                        {featuresData?.map((ftData, ftDataInx) => {
                            return (
                                <FeatureCard data={ftData} key={ftDataInx} />
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