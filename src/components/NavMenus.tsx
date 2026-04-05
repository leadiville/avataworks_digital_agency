"use client";
import Link from 'next/link'
import { setActive } from '@/utils/navabarActiveColor';
import PrimaryButton from './PrimaryButton';
import { faArrowRight, faEarthAfrica, faHome, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard } from '@fortawesome/free-solid-svg-icons/faContactCard';


const NavMenus = () => {   

    return (
        <div className="collapse navbar-collapse" id="navbarToggleMenu">
            <div className="menu-container d-flex flex-column flex-lg-row gap-4 justify-content-lg-evenly w-100 py-md-5 py-4 px-2 my-3 my-lg-0">
                <span className={`nav-items ${setActive('/')}`}>{<FontAwesomeIcon icon={faContactCard} className='me-3 d-lg-none' />}<Link href="/" className="nav-items my-lg-0 my-2">Home</Link></span>
                <span className={`nav-items ${setActive('/our-services')}`}>{<FontAwesomeIcon icon={faToolbox} className='me-3 d-lg-none' />}<Link href="/our-services" className="nav-items my-lg-0 my-2">Our Services</Link></span>
                {/* <span className={`nav-items ${setActive('/get-quote')}`}>{<FontAwesomeIcon icon={faContactCard} className='me-3 d-lg-none' />}<Link href="/get-quote" className="nav-items my-lg-0 my-2">Contact Us</Link></span> */}
                <span className={`nav-items ${setActive('/about')}`}>{<FontAwesomeIcon icon={faEarthAfrica} className='me-3 d-lg-none' />}<Link href="about" className="nav-items my-lg-0 my-2">About Us</Link></span>
                <PrimaryButton className='btn-white d-lg-none' text='Get Started' icon={faArrowRight} />
            </div>
        </div>
    )
}

export default NavMenus