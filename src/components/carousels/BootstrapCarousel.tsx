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
    <div className="container d-lg-flex">

      <Carousel className='container-fluid positon-relative py-5 home-carousel' slide>
        {heroSection.map((heroDetails, inx) => {
          return (
            <Carousel.Item key={heroDetails.id} >
              <div className="row g-0 align-items-center" style={{ height: 'fit' }}>
                <Carousel.Caption className='col-lg-7  position-static'>
                  <div className="text-md-center text-lg-start text-primary align-items-center justify-content-center">
                    <p className='hero-badge'>
                      <span className="badge-dot"></span>
                      <span className="badge-text text-primary">Nigeria's AI-Native Growth Agency</span>
                    </p>
                    <h1 className="text-black text-break text-bold fw-bold text-break">{inx == 0 ? heroDetails?.title.slice(0, 15) : heroDetails.title.slice(0, heroDetails.title.length - 10)}<span className='text-primary '>{inx == 0 ? heroDetails?.title.slice(15, 17) : heroDetails.title.slice(heroDetails.title.length - 10, heroDetails.title.length)}</span>{inx == 0 && heroDetails?.title.slice(17, heroDetails.title.length)}</h1>
                    <p className="lead mb-4 font-bold" style={{ color: "#0a0a0a" }}>
                      {heroDetails.body}
                    </p>
                    <div className="text-capitalize mb-4">
                      {/* <a className="btn btn-primary rounded-pill  me-2" href="#"><i className="fas fa-play-circle me-2"><FontAwesomeIcon icon={faPhone} width={20} height={20} /></i>Speak to an Avata</a>
                      <a className="btn btn-danger rounded-pill  ms-2 " href="#">Get a free Quote</a> */}
                      <div className='d-lg-flex d-grid gap-2 gap-md-3'>
                        <span className="">
                          <Link href={"tel:+234-708-935-5008"} onClick={() => setIsShowNumber(true)}>
                            <PrimaryButton text={`${!isShowNumber ? 'Speak to an avata' : '+2347089355008'}`} icon={faPhone} className='btn-primary' />
                          </Link>
                        </span>
                        <span className="">
                          <Link href={"/get-quote"}>
                            <PrimaryButton text={"Start Growing"} icon={faChartLine} className='btn-danger' /></Link>
                        </span>
                      </div>
                    </div>
                  </div>
                </Carousel.Caption>
                <div className="col-lg-5 order-first order-lg-1" >
                  <Image width={800} height={600} src={heroDetails.imageUrl} alt='slides' className='w-100 h-100' />
                </div>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
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
      <Carousel className='testimonial-carousel p-sm-0' fade>
        {testimonys?.map((e, eachInx) => (
          <Carousel.Item key={eachInx} className='rounded my-5 z-1'>
            <Stack direction='horizontal' gap={4} >
              <Card className='flex flex-lg-row p-4 justify-content-between align-items-center w-100 border my-4'>
                <Card.Img src={`${e.logo}`} width={100} height={100} className='logo-image bg-light' />
                <Card.Title className='d-flex flex-column text-black align-items-start'>
                  <Card.Title>{e.companyName} - {e.companyPosition}</Card.Title>
                  <Card.Text className='text-grey fw-light fw-bold fs-6 text-uppercase'>{`${e.service}`}</Card.Text>
                  <Card.Text className='text-black fw-light fs-6 '>"{e.review}"</Card.Text>
                  <br />
                  <span className='d-flex flex-row'>
                    <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                    <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                    <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                    <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                    <i className='star'><FontAwesomeIcon icon={faStar} style={{ color: 'ffd700' }}></FontAwesomeIcon></i>
                  </span>
                </Card.Title>
              </Card>
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel >
    </>
  )
}
export { TestimonialCarousel, HeroCarousel };