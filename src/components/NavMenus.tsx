"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import PrimaryButton from './PrimaryButton';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const NavMenus = () => {
    const pathname = usePathname();
    return (
        <div className={`collapse navbar-collapse`} id='navbarToggleMenu' >
            <div className="navbar-nav mx-0 mx-lg-auto">
                <Link href="/our-services" className={`nav-item nav-link ${pathname === "/our-services" ? "active" : "text-primary"}`}>Services</Link>
                <Link href="about" className={`nav-item nav-link ${pathname === "/about" ? "active" : "text-primary"}`}>About</Link>
                {/* <Link href="blog" className="nav-item nav-link">Blog</Link> */}
                <Link href="contact" className={`nav-item nav-link ${pathname === "/contact" ? "active" : "text-primary"}`}>Contact</Link>
                <div className="nav-item p-0" >
                    {/* <button className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0" data-bs-toggle="modal" data-bs-target="#searchModal"><FontAwesomeIcon icon={faSearch} width={20} height={20} /></button> */}
                    <Link href="/get-quote" ><PrimaryButton text='Get a Quote' icon={faPen} className="btn btn-danger rounded-pill px-4 flex-shrink-0"></PrimaryButton></Link>
                </div>
            </div>
        </div>
    )
}

export default NavMenus