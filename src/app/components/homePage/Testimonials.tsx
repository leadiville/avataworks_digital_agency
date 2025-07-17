import Image from 'next/image';
import React from 'react'
import { TestimonialCarousel } from '../../../../carousels/BootstrapCarousel';

const Testimonials = ({ testimonials }) => {
  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: '800px' }}>
          <h4 className="">Testimonial</h4>
          <h1 className="text-primary display-4 mb-4">Real Results. Real Voices</h1>
          <p className="mb-0">
            Discover how businesses across Nigeria and beyond have grown with AvataWorks. From startups to established brands, our clients share their experiences working with our dedicated AVATAs and result-driven digital solutions.
          </p>
        </div>
        <div className="row owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.2s">
          <div className="testimonial-item bg-light rounded">
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