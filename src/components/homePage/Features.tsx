"use client";
import { Ifeatures } from '@/types';
import FeatureCard from './FeatureCard';
import { iconMap } from '../../utils/iconMap';

interface FeaturesProps {
    featuresData: Ifeatures[];
    title: string;
}
const Features = ({ featuresData, title }: FeaturesProps) => {
    return (
        <div>
            {/* Feature Start  */}
            <div className="container-fluid feature bg-light pt-5">
                <div className="container py-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
                        <h1 className="text-primary">{title}</h1>
                        <p className="mb-0 p-4">At AVATAWorks, we don&apos;t just offer services—we deliver transformative solutions tailored to suite your brand needs. As your all-in-one Advanced Virtual Assistant in Technology and Advertising, we combine creativity, technology, and strategy to help brands scale faster, stronger, and smarter.
                        </p>
                    </div>
                    <div className="row g-4">
                        {featuresData.map((ftData, ftDataInx) => {
                            return (
                                <FeatureCard key={ftDataInx} title={ftData.title} info={ftData.info} icon={iconMap[ftData.icon]} />
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