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
            <div className="container-fluid nav-bar px-lg-4 px-md-5 py-md-0 position-relative   ">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link href="/" className="navbar-brand p-0">
                            <Image width={220} height={70} src="/logo.png" alt="Logo" className='w-100 h-100' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-target="#navbarToggleMenu" data-bs-toggle="collapse">
                            <span className="fa fa-bars"><FontAwesomeIcon icon={faBars} style={{ color: 'white' }} /></span>
                        </button>
                        <NavMenus />
                        <div className="d-none d-xl-flex flex-shrink-0 ps-4 gap-2">
                            <Link href="#" className="btn btn-light btn-lg-square rounded-circle position-relative wow tada " >
                                <span>
                                    <FontAwesomeIcon className='text-primary' icon={faPhoneAlt} width={25} height={25} style={{ width: '28px', height: '28px', marginLeft: "6px" }} />
                                    <div className="position-absolute" style={{ top: '7px', right: '26px' }}>
                                        <FontAwesomeIcon className='text-primary' icon={faCommentDots} width={20} height={20} style={{ width: '20px', height: '20px' }} />
                                    </div>
                                </span>
                            </Link>
                            <div className="d-flex flex-column">
                                <span className='text-light'>Speak to an AVATA</span>
                                <Link href="tel:+2347089355003"><span className="text-light">Free: + 234 708 935 5003</span></Link>
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