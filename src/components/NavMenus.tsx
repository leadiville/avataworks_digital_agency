"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PrimaryButton from './PrimaryButton';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const NavMenus = () => {
    const pathname = usePathname();
    return (
        <div className={`collapse navbar-collapse`} id='navbarToggleMenu' >
            <div className="menu-container">

                <div className="navbar-nav">
                    <Link href="/get-quote" className={`nav-item nav-link ${pathname === "/get-quote" ? "active" : "text-primary"}`}>Contact Us</Link>
                    <Link href="/our-services" className={`nav-item nav-link ${pathname === "/our-services" ? "active" : "text-primary"}`}>Our Services</Link>
                    <Link href="about" className={`nav-item nav-link ${pathname === "/about" ? "active" : "text-primary"}`}>About Us</Link>
                    {/* <Link href="blog" className="nav-item nav-link">Blog</Link> */}
                    <div className="nav-item p-0 px-lg-5" >
                        {/* <button className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><FontAwesomeIcon icon={faSearch} width={20} height={20} /></button> */}
                        <Link href="/get-quote" ><PrimaryButton text='Get a Quote' icon={faPen} className="btn btn-danger rounded-pill"></PrimaryButton></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenus