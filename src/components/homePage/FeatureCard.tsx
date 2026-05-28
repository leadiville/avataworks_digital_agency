import { Ifeatures } from '@/types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'

interface Ifeat {
    title: string;
    icon: IconDefinition;
}
const FeatureCard = ({ title, icon }: Ifeat) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useState<boolean>(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const el = ref.current;
    //         if (!el) return;

    //         const rect = el.getBoundingClientRect();
    //         const windowCenter = window.innerHeight / 2;
    //         const elementCenter = rect.top + rect.height / 2;

    //         setActive(Math.abs(windowCenter - elementCenter) <= 50);
    //     };
    //     handleScroll();
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);


    // useEffect(() => {
    //     // create a new observer for the component
    //     if (!ref.current) return;
    //     const el = ref.current;
    //     const observer = new IntersectionObserver(([runner]) => { setActive(runner.isIntersecting) }, {
    //         root: null, // This is the viewport ()
    //         // rootMargin: "-40% 0px -40% 0px",
    //         threshold: 1 // % of the ref is visible
    //     });
    //     observer.observe(el);
    //     return () => observer.disconnect();
    // }, []);

    return (
        <div className="col-lg-3 col-12 wow fadeInUp" ref={ref} >
            <Link href="/our-services" className='text-decoration-none'>
                <div className={`feature-item  ${active && 'feature-item-scroll'} p-4 py-0 pb-4 border border-white`}>
                    <div className="feature-icon p-4 mb-4 ">
                        <i><FontAwesomeIcon icon={icon} width={30} height={30} className='w-100 h-100' /></i>
                    </div>
                    <h4 className="mb-2 text-dark" style={{ fontWeight: 600 }}>{title}</h4>
                </div>
            </Link>
        </div>
    )
}

export default FeatureCard