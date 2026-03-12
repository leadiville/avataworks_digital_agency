"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PrimaryButton from './PrimaryButton';
import { faPen, faPhone } from '@fortawesome/free-solid-svg-icons';


const NavMenus = () => {
    const pathname = usePathname();
    return (
        <div className={`collapse navbar-collapse`} id='navbarToggleMenu' >
            <div className="menu-container">

                <div className="navbar-nav bg-white rounded my-lg-0 p-4 my-4 d-flex">
                    <Link href="/get-quote" className={`nav-item nav-link my-lg-0 my-2 me-lg-5 ${pathname === "/get-quote" ? "active" : "text-primary"}`}>Contact Us</Link>
                    <Link href="/our-services" className={`nav-item nav-link my-lg-0 my-2 me-lg-5 ${pathname === "/our-services" ? "active" : "text-primary"}`}>Our Services</Link>
                    <Link href="about" className={`nav-item nav-link my-lg-0 my-2 me-lg-5 ${pathname === "/about" ? "active" : "text-primary"}`}>About Us</Link>
                    {/* <Link href="blog" className="nav-item nav-link">Blog</Link> */}
                    <div className="nav-item p-0 my-lg-0 my-2 me-lg-5" >
                        <Link href="/get-quote" ><PrimaryButton text='Get a Quote' icon={faPen} className="btn btn-danger"></PrimaryButton></Link>
                    </div>
                    <div className="nav-item p-0 my-lg-0 my-2 me-lg-5 d-lg-none" >
                        <Link href="tel:+234-803-273-4944" ><PrimaryButton text='Speak to an Avata' icon={faPhone} className="btn btn-primary"></PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenus