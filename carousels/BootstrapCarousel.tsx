"use client";

import Image from 'next/image'
import React from 'react'
import { items } from '../public/heroData.json';
import { Carousel } from 'react-bootstrap'

export const HeroCarousel = () => {
  const { heroSection } = items;
  return (
    <Carousel className='header-carousel'>
      {heroSection.map((heroDetails) => (
        <Carousel.Item key={heroDetails.id} className='header-carousel-item'>
          <Carousel.Caption>
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7 animated fadeInLeft">
                  <div className="text-sm-center text-md-start text-primary">
                    <h4 className="text-uppercase fw-bold mb-4">welcome to Avataworks</h4>
                    <h1 className="display-1 mb-4 text-bs-primary">{heroDetails.title}</h1>
                    <p className="mb-5 fs-5 text-black">{heroDetails.body}
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4 text-capitalize">
                      <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i>Speak to an Avata</a>
                      <a className="btn btn-danger rounded-pill py-3 px-4 px-md-5 ms-2 " href="#">Get a free Quote</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 animated fadeInRight order-first order-sm-1">
                  <div className="calrousel-img" style={{ objectFit: 'cover' }}>
                    <Image width={500} height={500} src={heroDetails.imageUrl} alt='slides' className='w-100 h-100' />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

