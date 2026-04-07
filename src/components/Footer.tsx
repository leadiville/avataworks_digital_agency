import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faInstagram, faLinkedin, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCommentDots, faPhoneAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const footer = {
    footerAddress: [
        {
            title: "Address",
            subtitle: "Lagos",
            icon: "fa-map-marker-alt"
        },
        {
            title: "Contact Us",
            subtitle: "info@avataworks.com",
            icon: "fa-envelope"
        },
        {
            title: "Telephone",
            subtitle: "(+234)708 935 5003",
            icon: "fa-phone-alt"
        }
    ],

    usefulLinks: [
        "About Us",
        "Meet the Avatas",
        "Features",
        "Our Services",
        "FAQ's, Contact"
    ],

    socialLinks:
    {
        instagram: "https://www.instagram.com/avataworks?igsh=MXBvOW0xeWxiaDN2bg==",
        facebook: "www.facebook.com/share/1Aw2Y9yZrY/",
        LinkedIn: "https: //linkedin.com/company/avataworks",
        X: "https: //x.com/avataworks",
        Tiktok: "https: //www.tiktok.com/@avataworks"
    }

}

const Footer = async () => {

    return (
        <div>
            <div className="container-fluid footer py-5 wow fadeIn">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-xl-9">
                            <div className="mb-5">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-5">
                                        <div className="footer-item">
                                            <a href="index.html" className="p-0">
                                                <Image src="/logo.png" width={150} height={50} className='w-50 h-50 p-0 m-0' alt="Logo" />
                                            </a>
                                            <p className="text-white mb-4 text-capitalize">your all in one AI-driven agency</p>
                                            <div className="footer-btn d-flex">
                                                <Link className="btn btn-md-square rounded-circle me-3" href="https://web.facebook.com/avataworks"><i className="fab fa-facebook-f"><FontAwesomeIcon width={20} height={20} icon={faFacebook} /></i></Link>
                                                <Link className="btn btn-md-square rounded-circle me-3" href="https://x.com/avataworks"><i className="fab fa-twitter"><FontAwesomeIcon width={20} height={20} icon={faTwitter} /></i></Link>
                                                <Link className="btn btn-md-square rounded-circle me-3" href="https://www.instagram.com/avataworks_agency"><i className="fab fa-instagram"><FontAwesomeIcon width={20} height={20} icon={faInstagram} /></i></Link>
                                                <Link className="btn btn-md-square rounded-circle me-3" href="https://www.linkedin.com/company/avataworks"><i className="fab fa-linkedin-in"><FontAwesomeIcon width={20} height={20} icon={faLinkedin} /></i></Link>
                                                <Link className="btn btn-md-square rounded-circle me-0" href="https://tiktok.com/@avataworks"><i className="fab fa-twitter"><FontAwesomeIcon width={20} height={20} icon={faTiktok} /></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-3">
                                        <div className="footer-item">
                                            <h4 className="text-white mb-4">Useful Links</h4>
                                            {footer?.usefulLinks?.map((link: string, linkId: number) => <a key={linkId} href="#"><i className="fas fa-angle-right me-2"></i> {link}</a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-4">
                                        <div className="footer-item">
                                            <h4 className="mb-4 text-white">Instagram</h4>
                                            <div className="row g-3">
                                                <div className="col-4">
                                                    <div className="footer-instagram rounded">
                                                        {/* <img src="img/instagram-footer-1.jpg" className="img-fluid w-100" alt=""> */}
                                                        <div className="footer-search-icon">
                                                            <a href="img/instagram-footer-1.jpg" data-lightbox="footerInstagram-1" className="my-auto"><i className="fas fa-link text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="row g-4">
                                            {
                                                footer?.footerAddress?.map((contact, contactInx: number) => {

                                                    const { title, subtitle, icon } = contact;
                                                    return (
                                                        <div className="col-lg-6 col-xl-4" key={contactInx}>
                                                            <div className="d-flex">
                                                                <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                                                                    <i className="fas fa-map-marker-alt fa-2x"><FontAwesomeIcon icon={icon as IconProp} width={20} height={20} /></i>
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-white">{title}</h4>
                                                                    <p className="mb-0 text-primary">{subtitle}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Newsletter</h4>
                                <p className="text-white mb-3">Subscribe to our newsletter to get latest updates on your business needs</p>
                                <div className="position-relative rounded-pill mb-4">
                                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                                </div>
                                <div className="d-flex flex-shrink-0">
                                    <div className="footer-btn">
                                        <a href="#" className="btn btn-lg-square rounded-circle position-relative wow tada">
                                            <i className="fa fa-phone-alt fa-2x"><FontAwesomeIcon icon={faPhoneAlt} /></i>
                                            <div className="position-absolute" style={{ top: " 1px", right: "25px" }}>
                                                <span><i className="fa fa-comment-dots"><FontAwesomeIcon icon={faCommentDots} /></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="d-flex flex-column ms-3 flex-shrink-0 text-white">
                                        <span >Contact our Avatas</span>
                                        <a href="tel: (+234) 708 935 5003"><span className="text-white">Free: (+234) 708 935 5003</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer