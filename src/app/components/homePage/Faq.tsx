
import Image from 'next/image'
import React from 'react'
import AccordionA from '../AccordionA'
import { faqT } from '@/app/our-services/page';


const Faq = ({ faqs }: faqT[]) => {
    console.log(faqs);
    return (
        <div>
            <div className="container-fluid faq-section bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-6 wow fadeInLeft order-lg-first" data-wow-delay="0.2s">
                            <div className="h-100">
                                <div className="mb-5">
                                    <h4>FAQ's answered by our AVATAs</h4>
                                    <h2 className="text-primary">Common Frequently Asked Questions</h2>
                                </div>
                                <AccordionA faqs={faqs} />
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight order-first order-sm-first" data-wow-delay="0.4s">
                            <Image src="/FAQs-amico.png" className="w-100 h-100" alt="" width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq