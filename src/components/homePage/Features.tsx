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
            <div className="container-fluid feature bg-light py-5">
                <div className="container py-lg-5">
                    <div className="d-flex justify-content-center align-items-center w-100">
                        <div className="col-12 pb-5 wow fadeInUp">
                            <h2 className="text-primary text-center">{title}</h2>
                        </div>
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