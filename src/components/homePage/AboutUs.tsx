"use client";
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'
import AboutGrowth from '../AboutUs/AboutGrowth'
// import { usePathname } from 'next/navigation'
import { faBook, faBookOpen, faPencil } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    // const path = usePathname();
    return (
        <section>
            <div className="py-5 bg-primary">
                <div className="container text-center py-4 text-white">
                    <div className="py-lg-1 d-inline-block px-lg-4 rounded-pill mb-4 text-white bg-primaryLighter">🌍 Lagos → Africa → World</div>
                    <h1 style={{ marginBottom: '16px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Africa's brands deserve better.<br />We're building the system that delivers it.</h1>
                    <p className='text-white' style={{ maxWidth: '560px', margin: '0 auto 40px' }}>AVATAWorks is not another Lagos agency. It's the AI-driven growth infrastructure African businesses have been waiting for.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <PrimaryButton text='Get a Free Strategy Session →' className='btn-white border-primary p-lg-3' />
                        <PrimaryButton text='About AVATAWorks btn-primary' className='btn-primary border-white' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs