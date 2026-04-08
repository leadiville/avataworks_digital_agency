"use client";
import Link from 'next/link'
import { setActive } from '@/utils/navabarActiveColor';
import PrimaryButton from './PrimaryButton';
import { faArrowRight, faEarthAfrica, faHome, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard } from '@fortawesome/free-solid-svg-icons/faContactCard';


const NavMenus = () => {

    return (
        <div className="collapse navbar-collapse mt-4 mb-2 mt-lg-0 mb-lg-0" id="navbarToggleMenu">
            <div className="w-100 d-lg-flex justify-content-center">
                <div className="col-lg-10 col-12 bg-white border border-white position-relative z-1 p-3 p-lg-1 px-lg-5 rounded d-lg-flex justify-content-between d-grid gap-4">
                    <span className='nav-item-container'>{<FontAwesomeIcon icon={faHome} className='d-lg-none text-primary' />}<Link href="/" className={`${setActive("/")} nav-item my-lg-0 my-2`}>Home</Link></span>
                    <span className='nav-item-container'>{<FontAwesomeIcon icon={faToolbox} className='d-lg-none text-primary' />}<Link href="/our-services" className={`${setActive("/our-services")} nav-item my-lg-0 my-2`}>Our Services</Link></span>
                    {/* <span ('/get-quote')}`}>{<FontAwesomeIcon icon={faContactCard} className='d-lg-none' />}<Link href="/get-quote" className="my-lg-0 my-2">Contact Us</Link></span> */}
                    <span className='nav-item-container'>{<FontAwesomeIcon icon={faEarthAfrica} className='d-lg-none text-primary' />}<Link href="about" className={`${setActive("/about")} nav-item my-lg-0 my-2`}>About Us</Link></span>
                    <Link href={"/get-quote"}><PrimaryButton className='btn-danger d-lg-none mx-lg-0 ms-2 mb-2 mb-lg-0 ' text='Get Started' icon={faArrowRight} /></Link>
                </div>
            </div>
        </div>
    )
}

export default NavMenus