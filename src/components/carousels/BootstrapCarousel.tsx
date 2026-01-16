"use client";

import Image from 'next/image'
import React from 'react'
import allItems from '../../../public/heroData.json';
import { Card, Carousel, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenAlt, faPhone, faPhoneAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { Ireviews } from '@/types';
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';

const HeroCarousel = () => {
  const { heroSection } = allItems.items;
  return (
    <Carousel className='header-carousel container-fluid'>
      {heroSection.map((heroDetails) => (
        <Carousel.Item key={heroDetails.id} className='header-carousel-item'>
          <Carousel.Caption>
            <div className="container-fluid">
              <div className="row g-4 align-items-center">
                <div className="col-lg-7 animated fadeInLeft">
                  <div className="text-sm-center text-md-start text-primary">
                    {/* <h4 className="text-uppercase text-black fw-bold mb-4">welcome to Avataworks</h4> */}
                    <h2 className="text-primary text-wrap">{heroDetails.title}</h2>
                    <p className="mb-5 fs-lg-5 text-black">{heroDetails.body}
                    </p>
                    <div className="d-md-flex justify-content-center justify-content-md-start flex-shrink-0 text-capitalize">
                      {/* <a className="btn btn-primary rounded-pill  me-2" href="#"><i className="fas fa-play-circle me-2"><FontAwesomeIcon icon={faPhone} width={20} height={20} /></i>Speak to an Avata</a>
                      <a className="btn btn-danger rounded-pill  ms-2 " href="#">Get a free Quote</a> */}
                      <Link href="/our-services" ><PrimaryButton text='Speak to an Avata' icon={faPhoneAlt} className='btn-primary' /></Link>
                      <Link href={"/about"}><PrimaryButton text='Get a quote' icon={faPenAlt} className='btn-danger' /></Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 p-0 mt-0 mb-0 animated fadeInRight order-first order-lg-1">
                  <div className="calrousel-img p-0" style={{ objectFit: 'cover' }}>
                    {/* <Image width={500} height={500} src={heroDetails.imageUrl} alt='slides' className='w-100 h-100' /> */}
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
  // function for making two contents of the array display at once
  // for (let i = 0; i < testimonys.length; i += 2) {
  //   groupedItems.push(window.innerWidth >= 967 ? testimonys.slice(i, i + 2) : testimonys.slice(i, i + 1));
  // }
  return (
    <>
      <Carousel className='testimonial-carousel p-sm-0' slide>
        {testimonys?.map((e, eachInx) => (  
          <Carousel.Item key={eachInx} className='rounded my-5'>
            <Stack direction='horizontal' gap={4} >
              <Card className='flex flex-lg-row  px-lg-5 mx-lg-5 justify-content-between align-items-center w-100 border my-4'>
                <Card.Img
                  src={`${e.logo}`} width={100} height={100} className='logo-image bg-light' />
                <Card.Body className='d-flex flex-column text-black align-items-lg-start align-items-center'>
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
              </Card>
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel >
    </>
  )
}
export { TestimonialCarousel, HeroCarousel };