"use client";

import Image from 'next/image'
import allItems from '../../../public/heroData.json';
import { Card, Carousel, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPenAlt, faPhone, faStar } from '@fortawesome/free-solid-svg-icons';
import { Ireviews } from '@/types';
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';
import { useState } from 'react';

const HeroCarousel = () => {
  const [isShowNumber, setIsShowNumber] = useState<boolean>(false);
  const { heroSection } = allItems.items;

  return (
    <Carousel className='header-carousel container-fluid'>
      {heroSection.map((heroDetails) => (
        <Carousel.Item key={heroDetails.id} className='header-carousel-item'>
          <Carousel.Caption>
            <div className="row g-4 align-items-center justify-content-center">
              <div className="col-lg-7 animated fadeInLeft">
                <div className="text-sm-center text-md-start text-primary align-items-center justify-content-center w-100">
                  <p className='rounded-pill bg-primaryLight d-inline-block text-primary p-lg-2 px-2 p-1 mt-lg-5'>
                    <span className="px-lg-2"></span>
                    Nigeria's AI-Native Growth Agency
                  </p>
                  <h1 className="text-black text-break display-1 text-bold fw-bold mt-2">Africa's <span className='text-primary '>AI-Driven</span> Growth Engine. Built in Lagos.</h1>
                  <h5 className="my-4 fs-lg-5 font-bold" style={{ color: "#0a0a0a" }}>AVATAWorks combines AI-powered execution with expert Human-in-the-Loop AVATAs to deliver social media marketing, branding, and web development — faster, smarter, and at a fraction of traditional agency costs.
                  </h5>
                  <div className="text-capitalize hero-cta">
                    {/* <a className="btn btn-primary rounded-pill  me-2" href="#"><i className="fas fa-play-circle me-2"><FontAwesomeIcon icon={faPhone} width={20} height={20} /></i>Speak to an Avata</a>
                      <a className="btn btn-danger rounded-pill  ms-2 " href="#">Get a free Quote</a> */}
                    <div className='d-lg-flex d-grid gap-2 gap-md-3'>
                      <span className="">
                        <Link href={"tel:+234-708-935-5008"} onClick={() => setIsShowNumber(true)}>
                          <PrimaryButton text={`${!isShowNumber ? 'Speak to an avata' : '+2347089355008'}`} icon={faPhone} className='btn-primary align-items-center p-3 justify-content-center w-100' /></Link>
                      </span>
                      <span className="">
                        <Link href={"/get-quote"}>
                          <PrimaryButton text={"Start Growing"} icon={faChartLine} className='btn-danger p-3 align-items-center justify-content-center w-100 text-white' /></Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-5 pt-5 animated fadeInRight order-first order-lg-1">
                <div className="" style={{ objectFit: 'cover' }}>
                  {/* <Image width={500} height={500} src={heroDetails.imageUrl} alt='slides' className='w-100 h-100' /> */}
                  <Image width={500} height={500} src={heroDetails.imageUrl} alt='slides' className='w-100 h-100' />
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
  testimonys: Ireviews[];
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
                  <Card.Title>{e.companyName} - {e.companyPosition}</Card.Title>
                  <Card.Text></Card.Text>
                  <Card.Text>{`${e.service}`}</Card.Text>
                  <Card.Text>"{e.review}"</Card.Text>
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