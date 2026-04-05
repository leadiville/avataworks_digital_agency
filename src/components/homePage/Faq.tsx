
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
            <div className="container-fluid  bg-light">
                <div className="container">
                    <div className="row g-5 align-items-center py-5">
                        <div className="col-xl-6 wow fadeInLeft order-lg-2">
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
                        <div className="col-xl-6 wow fadeInRight order-first order-lg-1">
                            <Image src="/FAQs-amico.png" className="w-100 h-100" alt="" width={400} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;