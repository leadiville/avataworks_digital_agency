"use client";
import { Iservice } from '@/types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';
import { iconMap } from '@/utils/iconMap';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ScrollAnimate from '@/utils/ScrollAnimate';

interface ServicesProps {
    services: Iservice[];
}
const OurServices = ({ services }: ServicesProps) => {

    // const [isActive, setIsActive] = useState(false);
    // const ref = useRef(null);
    // useEffect(() => {
    //     const el = ref.current;
    //     if (!el) return
    //     const observer = new IntersectionObserver(() => setIsActive(true), {
    //         root: null,
    //         threshold: 0.6,
    //         rootMargin: '40% 0px 40% 0px'
    //     });
    //     observer.observe(el);
    //     return () => observer.disconnect();
    // }, []);

    return (
        <div className=''>
            <div className="container-fluid service py-5 position-relative bg-primaryLight z-2">
                <div className="container py-lg-5 py-4 p-lg-4">
                    <ScrollAnimate >
                        <span className="text-center pb-5 ">
                            <h2 className="mb-4 text-primary">AI-Driven digital marketing services. One team. <br /> Infinite possibilities.</h2>
                            <div className="d-flex justify-content-center" >
                                <p className="mb-0 col-12 col-lg-8">Avataworks is a full-service, AI-native digital marketing agency built in Lagos, Nigeria. We deliver social media marketing, creative branding, and website development for ambitious, brands. AI-generated at speed, Avata-reviewed for quality, and deployed 24/7.
                                </p>
                            </div>
                        </span>
                    </ScrollAnimate>
                    <div className="row gb-lg-4 gy-4 justify-content-evenly">
                        {services?.map((service) => {
                            const { _id, title, imgSrc, icon, fullInfo, showInfo } = service;
                            const [isShowMore, setIsShowMore] = useState(showInfo);
                            return (
                                <div key={_id} className="col-md-6 col-lg-4 wow fadeInUp  my-5">
                                    <ScrollAnimate>
                                        <div className={`service-item`}>
                                            <div className="service-img">
                                                <Image width={400} height={400} src={imgSrc as string} className="img-fluid rounded-top w-100" alt="" />
                                                <div className="service-icon p-3">
                                                    <i className="fa fa-users fa-2x"><FontAwesomeIcon icon={iconMap[icon as string]} /></i>
                                                </div>
                                            </div>
                                            <div className="service-content p-lg-4 px-2 py-3 text-center">
                                                <div className="service-content-inner">
                                                    <h2 className="d-inline-block h4 mb-4 d-inline-block services-header">{title}</h2>
                                                    <p className="mb-4 service-info">{isShowMore ? fullInfo + " " : (fullInfo?.slice(0, 195) + '...' + ' ')}
                                                        <a type='button' className='text-dark' onClick={() => setIsShowMore(!isShowMore)}> {`${!isShowMore ? ' show-more' : " show-less"}`}</a>
                                                    </p>
                                                    <Link href={"/our-services"} className='explore-btn d-inline-block'><PrimaryButton className='border border-2 bg-white py-lg-3 px-lg-4 p-2' text={`Explore ${title}`} /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollAnimate>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-100 text-center'>
                        <Link href={'/our-services'} ><PrimaryButton text='View All Services' icon={faArrowRight} className='btn-primary' /></Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default OurServices;