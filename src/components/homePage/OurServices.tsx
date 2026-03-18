"use client";
import { Iservice } from '@/types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';
import { iconMap } from '@/utils/iconMap';

interface ServicesProps {
    services: Iservice[];
}
const OurServices = ({ services }: ServicesProps) => {

    const [isActive, setIsActive] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return
        const observer = new IntersectionObserver(() => setIsActive(true), {
            root: null,
            threshold: 0.6,
            rootMargin: '40% 0px 40% 0px'
        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div className="container-fluid service py-5">
                <div className="container py-5 p-lg-4">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" >
                        <h1 className="mb-4 text-primary display-3">Full digital services. <br /> One team. <br /> Infinite possibilities.</h1>
                        <h6 className="mb-0 text-black px-lg-5 mx-lg-5">We offer end-to-end digital services to startups, SMEs, and established brands. These services are delivered by our internal digital team and verified AVATAs (Advanced Virtual Assistants in Tech & Advertising we assign on demand).
                        </h6>
                    </div>
                    <div className="row gy-lg-4 gy-4 justify-content-evenly">
                        {services?.map((service) => {
                            const { _id, title, imgSrc, icon, fullInfo } = service;
                            return (
                                <div key={_id} className="col-md-6 col-lg-4 wow fadeInUp my-5 py-2" ref={ref}>
                                    <div className={`service-item ${isActive && 'services-scroll'}`}>
                                        <div className="service-img">
                                            <Image width={400} height={400} src={imgSrc as string} className="img-fluid rounded-top w-100" alt="" />
                                            <div className="service-icon p-3">
                                                <i className="fa fa-users fa-2x"><FontAwesomeIcon icon={iconMap[icon as string]} /></i>
                                            </div>
                                        </div>
                                        <div className="service-content p-4">
                                            <div className="service-content-inner">
                                                <h2 className="d-inline-block h4 mb-4">{title}</h2>
                                                <p className="mb-4">{fullInfo}</p>
                                                <Link href={"/our-services"} className='explore-btn py-3'><PrimaryButton className='border-primary bg-white py-3 px-4' text={`Explore ${title}`} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;