import React from 'react'
// import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCommentDots, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
// import  styles  from '@/app/css/Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link href="/" className="navbar-brand p-0">
                            <img width={100} height={100} src="/logo.png" alt="Logo" className='w-100 h-100' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-target="#navbarToggleMenu" data-bs-toggle="collapse">
                            <span className="fa fa-bars"><FontAwesomeIcon icon={faBars} style={{ color: 'white' }} /></span>
                        </button>
                        <div className={`collapse navbar-collapse`} id='navbarToggleMenu' >
                            <div className="navbar-nav mx-0 mx-lg-auto">
                                <div className="nav-item dropdown" >
                                    {/* <Link href="#" className="nav-link" data-bs-toggle="dropdown">
                                        <span className="dropdown-toggle">Company</span>
                                    </Link> */}
                                    <div className="dropdown-menu">
                                        <Link href="feature" className="dropdown-item" id='features-section'>Our Features</Link>
                                        <Link href="team" className="dropdown-item" id='dropdown'>Our team</Link>
                                        <Link href="testimonial" className="dropdown-item" id='testimonial'>Testimonial</Link>
                                        <Link href="FAQ" className="dropdown-item" id='faq'>FAQs</Link>
                                    </div>
                                </div>
                                {/* <Link href="index" className="nav-item nav-link active">Home</Link> */}
                                <Link href="/our-services" className="nav-item nav-link text-primary">Services</Link>
                                <Link href="about" className="nav-item nav-link text-primary">About</Link>
                                {/* <Link href="blog" className="nav-item nav-link">Blog</Link> */}
                                <Link href="contact" className="nav-item nav-link text-primary">Contact</Link>
                                <div className="nav-btn px-3">
                                    {/* <button className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><FontAwesomeIcon icon={faSearch} width={20} height={20} /></button> */}
                                    <Link href="#" className="btn btn-danger rounded-pill py-2 px-4 ms-3 flex-shrink-0"> Get a Quote</Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-xl-flex flex-shrink-0 ps-4">
                            <Link href="#" className="btn btn-light btn-lg-square rounded-circle position-relative wow tada " >
                                <span>
                                    <FontAwesomeIcon icon={faPhoneAlt} width={25} height={25} style={{ width: '28px', height: '28px', marginLeft: "6px" }} />
                                    <div className="position-absolute" style={{ top: '7px', right: '26px' }}>
                                        <FontAwesomeIcon icon={faCommentDots} width={20} height={20} style={{ width: '20px', height: '20px' }} />
                                    </div>
                                </span>
                            </Link>
                            <div className="d-flex flex-column ms-3">
                                <span className='text-light'>Call to Our Experts</span>
                                <Link href="tel:+ 0123 456 7890"><span className="text-light">Free: + 234 708 935 5003</span></Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/*  Navbar & Hero End  */}

        </div>
    )
}

export default Navbar