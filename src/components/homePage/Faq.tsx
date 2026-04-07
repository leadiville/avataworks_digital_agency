
import Image from 'next/image'
import React from 'react'
import AccordionA from '../AccordionA'
import { IfaqHome } from '@/types';
import Badge from '../Badge';

interface FaqProps {
    faq: IfaqHome[]
}
const Faq = ({ faq }: FaqProps) => {
    return (
        <div className="container-fluid bg-light py-5">
            <div className="container py-lg-5">
                <div className="row g-5 align-items-center py-5">
                    <div className="col-xl-6 wow fadeInLeft order-lg-2">
                        <div className="h-100">
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <Badge text='FAQ&apos;s answered by our AVATAs' style='col-12 mb-0' />
                            </div>
                            <h2 className="text-primary py-3 text-center text-lg-start" >Frequently Asked Questions</h2>
                            <AccordionA faq={faq} />
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight order-first order-lg-1">
                        <Image src="/FAQs-amico.png" className="w-100 h-100" alt="" width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;