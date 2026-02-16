import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCommentDots, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import NavMenus from './NavMenus'
// import  styles  from '@/app/css/Navbar.module.css'

const Navbar = () => {
    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-fluid nav-bar px-0 px-md-5 py-md-0">
                <div>
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/" className="navbar-brand p-0">
                            <Image width={220} height={70} src="/logo.png" alt="Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-target="#navbarToggleMenu" data-bs-toggle="collapse">
                            <span className="fa fa-bars"><FontAwesomeIcon icon={faBars} style={{ color: 'white' }} /></span>
                        </button>
                        <NavMenus />
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