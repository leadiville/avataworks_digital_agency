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
          <Image width={1920} height={700} />
          <Carousel.Caption  className='carousel-caption'>
            <div className="container">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7 animated fadeInLeft">
                  <div className="text-sm-center text-md-start">
                    <h4 className="text-white text-uppercase fw-bold mb-4">{heroDetails.title}</h4>
                    <h1 className="display-1 text-white mb-4">{heroDetails.body}</h1>
                    {/* <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                      </p> */}
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                      <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i> Watch Video</a>
                      <a className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Get a Quote</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 animated fadeInRight">
                  <div className="calrousel-img" style={{ objectFit: 'cover' }}>
                    <Image width={500} height={500} src={heroDetails.imageUrl} alt='slides' className='w-100'/>
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

