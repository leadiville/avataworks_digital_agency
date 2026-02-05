import { Ifeatures } from '@/types';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react'


interface Ifeature {
    data: Ifeatures;
}
const FeatureCard = ({ data }: Ifeature) => {
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


    useEffect(() => {
        // create a new observer for the component
        if (!ref.current) return;
        const el = ref.current;
        const observer = new IntersectionObserver(([runner]) => { setActive(runner.isIntersecting) }, {
            root: null, // This is the viewport ()
            // rootMargin: "-40% 0px -40% 0px",
            threshold: 1 // % of the ref is visible

        });
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const { title, info, icon } = data;

    return (
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" ref={ref} >
            <div className={`feature-item  ${active && 'feature-item-scroll'} p-4 pt-0`} style={{ maxHeight: '320px' }}>
                <div className="feature-icon p-4 mb-4">
                    <i><FontAwesomeIcon icon={icon as IconDefinition} width={30} height={30} style={{ width: '50px', height: '50px' }} /></i>
                </div>
                <h4 className="mb-4" style={{ fontWeight: 600 }}>{title}</h4>
                <p className="mb-0 text-black-5">{info}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard