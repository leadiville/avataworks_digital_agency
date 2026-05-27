"use client";
import Link from 'next/link'
import { setActive } from '@/utils/navabarActiveColor';
import PrimaryButton from './PrimaryButton';
import { faArrowRight, faEarthAfrica, faHome, faReceipt, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavMenus = () => {

    return (
        <div className="collapse navbar-collapse mt-4 mb-2 mt-lg-0 mb-lg-0" id="navbarToggleMenu">
            <div className="w-100 d-lg-flex justify-content-center align-items-center">
                <div className="col-lg-10 col-12 bg-white border border-white position-relative z-1 p-3 py-lg-2 p-lg-1 px-lg-5 rounded d-lg-flex justify-content-between d-grid">
                    <Link href="/" className={`${setActive("/")} nav-item-container`}><span className='nav-item my-lg-0 my-2'>{<FontAwesomeIcon icon={faHome} className='d-lg-none text-white me-2' />} Home</span></Link>
                    <Link href="/our-services" className={`${setActive("/our-services")} nav-item-container`}><span className='nav-item my-lg-0 my-2'>{<FontAwesomeIcon icon={faHome} className='d-lg-none text-white me-2' />} Our Services</span></Link>
                    <Link href="/about" className={`${setActive("/about")} nav-item-container`}><span className='nav-item my-lg-0 my-2'>{<FontAwesomeIcon icon={faHome} className='d-lg-none text-white me-2' />} About</span></Link>
                    <Link href="/our-works" className={`${setActive("/our-works")} nav-item-container`}><span className='nav-item my-lg-0 my-2'>{<FontAwesomeIcon icon={faHome} className='d-lg-none text-white me-2' />} Our Works</span></Link>
                    <Link className=' d-lg-none mx-lg-0 ms-2 mb-2 mb-lg-0 my-3' href={"/get-quote"}><button className='bg-danger d-lg-inline-block py-2 px-4 rounded'>Get Started<FontAwesomeIcon icon={faArrowRight} width={20} height={100} className='align-center ms-2'/></button></Link>
                </div>
            </div>
        </div>
    )
}

export default NavMenus