"use client";

import Image from 'next/image'
import React from 'react'
import { items } from '../../../../public/heroData.json';
import { Card, Carousel, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { Ireviews } from '@/types';

const HeroCarousel = () => {
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
                    {/* <h4 className="text-uppercase text-black fw-bold mb-4">welcome to Avataworks</h4> */}
                    <h2 className="text-primary">{heroDetails.title}</h2>
                    <p className="mb-5 fs-lg-5 text-black">{heroDetails.body}
                    </p>
                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4 text-capitalize">
                      <a className="btn btn-primary rounded-pill  me-2" href="#"><i className="fas fa-play-circle me-2"><FontAwesomeIcon icon={faPhone} width={20} height={20} /></i>Speak to an Avata</a>
                      <a className="btn btn-danger rounded-pill  ms-2 " href="#">Get a free Quote</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 p-0 mt-0 mb-0 animated fadeInRight order-first order-sm-1">
                  <div className="calrousel-img p-0" style={{ objectFit: 'cover' }}>
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
interface ReviewsProps {
  testimonys: Ireviews[]
}

const TestimonialCarousel = ({ testimonys }: ReviewsProps) => {
  if (typeof window === "undefined") return null;
  const groupedItems = [];
  for (let i = 0; i < testimonys.length; i += 2) {
    groupedItems.push(window.innerWidth >= 967 ? testimonys.slice(i, i + 2) : testimonys.slice(i, i + 1));
  }
  return (
    <>
      <Carousel className='testimonial-carousel p-sm-0' slide>
        {groupedItems?.map((each, eachInx) => (
          <Carousel.Item key={eachInx} className='rounded-5 my-5'>
            <Stack direction='horizontal' gap={4} >
              {each.map((e, eInx: number) => (
                <Card key={eInx} className='d-flex flex-row align-items-center w-100 border my-4' >
                  <div className="row g-lg-2">
                    <div className="col-lg-4 col-sm-12">
                      <Card.Img
                        src={`${e.logo}`} width={200} height={200} className='logo-image bg-light w-100 h-100' />
                    </div>
                    <div className="col-lg-8 col-sm-12 d-flex align-items-center" >
                      <Card.Body className='d-flex flex-column text-black'>
                        <Card.Title>{e.companyName}</Card.Title>
                        <Card.Text>{e.companyPosition}</Card.Text>
                        <Card.Text>{e.review}</Card.Text>
                        <br />
                        <span className='d-flex flex-row'>
                          <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                          <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                          <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                          <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                          <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                        </span>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              ))}
            </Stack>
          </Carousel.Item>
        )
        )}
      </Carousel >
    </>
  )
}
export { TestimonialCarousel, HeroCarousel };