
import Image from 'next/image'
import React from 'react'
import AccordionA from '../AccordionA'
import { IfaqHome } from '@/types';

interface FaqProps {
    faq: IfaqHome[]
}
const Faq = ({ faq }: FaqProps) => {
    return (
        <div>
            <div className="container-fluid faq-section bg-light py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-xl-6 wow fadeInLeft order-lg-first">
                            <div className="h-100">
                                <div className="mb-5">
                                    <h4>FAQ&apos;s answered by our AVATAs</h4>
                                    <h1 className="text-primary display-3">Frequently Asked Questions</h1>
                                </div>
                                <>
                                    <AccordionA faq={faq} />
                                </>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInRight order-first order-sm-first">
                            <Image src="/FAQs-amico.png" className="w-100 h-100" alt="" width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;