import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faCommentDots, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import NavMenus from './NavMenus'
import PrimaryButton from './PrimaryButton'
// import  styles  from '@/app/css/Navbar.module.css'

const Navbar = () => {
    return (
        <div className='bg-primary'>
            {/* Navbar & Hero Start */}
            <div className="container-fluid py-md-0 position-relative">
                <div className='container'>
                    <nav className="navbar navbar-expand-lg w-fit position-relative">
                        <Link href="/" className="navbar-brand">
                            <Image width={220} height={70} src="/logo.png" alt="Logo" className='w-100 h-100' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-target="#navbarToggleMenu" data-bs-toggle="collapse">
                            <span className="fa fa-bars"><FontAwesomeIcon icon={faBars} style={{ color: 'white' }} /></span>
                        </button>
                        <NavMenus />
                        {<div className="d-none d-lg-inline-block bg-white p-lg-2 rounded">
                            <Link href={'/get-quote'}><PrimaryButton className='bg-danger text-white rounded p-lg-2' text='Get Started' icon={faArrowRight} /></Link>
                        </div>}
                    </nav>
                </div>
            </div>
            {/*  Navbar & Hero End  */}
        </div>
    )
}

export default Navbar