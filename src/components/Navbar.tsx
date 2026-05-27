import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faCommentDots, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import NavMenus from './NavMenus'
import PrimaryButton from './PrimaryButton'
// import  styles  from '@/app/css/Navbar.module.css'

const Navbar = () => {
    return (
        <div className='bg-primary py-2'>
            {/* Navbar & Hero Start */}
            <div className="container-fluid container py-md-0 position-relative">
                <div className='container'>
                    <nav className="navbar navbar-expand-lg w-fit position-relative">
                        <Link href="/" className="navbar-brand">
                            <Image width={120} height={120} src="/logo.png" alt="Logo" className='w-100 h-100' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-target="#navbarToggleMenu" data-bs-toggle="collapse">
                            <span className="fa fa-bars"><FontAwesomeIcon icon={faBars} style={{ color: 'white' }} /></span>
                        </button>
                        <NavMenus />
                        {<div className="d-none d-lg-inline-block border border-white rounded hero-quote">
                            <Link href={'/get-quote'}><button className='bg-danger rounded d-lg-inline-block py-2 px-4 d-none'>Get Started<FontAwesomeIcon icon={faArrowRight} width={20} height={100} className='align-center ms-2'/></button></Link>
                        </div>}
                    </nav>
                </div>
            </div>
            {/*  Navbar & Hero End  */}
        </div>
    )
}

export default Navbar