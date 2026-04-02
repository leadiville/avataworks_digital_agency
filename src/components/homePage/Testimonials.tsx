import React from 'react'
import { Ireviews } from '@/types';
import { TestimonialCarousel } from '../carousels/BootstrapCarousel';

interface TestimonyProps {
  testimonials: Ireviews[]
}
const Testimonials = ({ testimonials }: TestimonyProps) => {
  return (
    <div className="container-fluid testimonial pt-5 bg-primaryLight position-relative z-1 rounded-lg-pill mb-5">
      <div className="container pb-3">
        <div className="text-center mx-auto wow fadeInUp w-lg-75 mb-5" >
          <h1 className="text-primary display-4 mb-4">Real Results. Real Voices</h1>
          <p className="mb-0">
            Discover how businesses across Nigeria and beyond have grown with AvataWorks. From startups to established brands, our clients share their experiences working with our dedicated AVATAs and result-driven digital solutions.
          </p>
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