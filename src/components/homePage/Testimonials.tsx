import React from 'react'
import { Ireviews } from '@/types';
import { TestimonialCarousel } from '../carousels/BootstrapCarousel';

interface TestimonyProps {
  testimonials: Ireviews[]
}
const Testimonials = ({ testimonials }: TestimonyProps) => {
  return (
    <div className="container-fluid testimonial bg-primaryLight rounded-lg-pill py-lg-4">
      <div className="container pb-3">
        <div className="text-center mx-auto wow fadeInUp w-lg-75 mb-5" >
          <h2 className="text-primary mb-4">Real Results. Real Voices</h2>
          <div className="d-flex justify-content-center">
            <p className="mb-0 col-lg-6 text-center">
              Discover how businesses across Nigeria and beyond have grown with AvataWorks. From startups to established brands, our clients share their experiences working with our dedicated AVATAs and result-driven digital solutions.
            </p>
          </div>
        </div>
        <div className="row owl-carousel testimonial-carousel wow fadeInUp">
          <div className="testimonial-item rounded">
            <div className="row g-4">
              <TestimonialCarousel testimonys={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;