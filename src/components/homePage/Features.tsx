"use client";
import { Ifeatures } from '@/types';
import FeatureCard from './FeatureCard';
import { iconMap } from '../../utils/iconMap';
import ScrollAnimate from '@/utils/ScrollAnimate';

interface FeaturesProps {
    featuresData: Ifeatures[];
    title: string;
}
const Features = ({ featuresData, title }: FeaturesProps) => {
    return (
        <div>
            {/* Feature Start  */}
            <div className="container-fluid feature bg-primary pt-lg-5">
                <ScrollAnimate>
                    <div className="container pt-5">
                        <div className="d-flex justify-content-center align-items-center w-100">
                            <div className="col-12 pb-5 wow fadeInUp">
                                <h2 className="text-white text-center">{title}</h2>
                            </div>
                        </div>
                        <div className="row g-4">
                            {featuresData.map((ftData, ftDataInx) => {
                                return (
                                    <FeatureCard key={ftDataInx} title={ftData.title} icon={iconMap[ftData.icon]} />
                                )
                            })}
                        </div>
                    </div>
                </ScrollAnimate>
            </div>
            {/* Feature End  */}
        </div >
    )
}

export default Features