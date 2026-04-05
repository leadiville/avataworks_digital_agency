"use client";
import PrimaryButton from '../PrimaryButton'
import Link from 'next/link'
import AboutGrowth from '../AboutUs/AboutGrowth'
// import { usePathname } from 'next/navigation'
import { faBook, faBookOpen, faPencil } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
    // const path = usePathname();
    return (
        <section className='bg-primary pb-4'>
            <div className="py-5 container">
                <div className="container text-center py-4 text-white">
                    <div className="py-lg-1 d-inline-block px-lg-4 rounded-pill mb-4 text-white bg-primaryLighter">🌍 Lagos → Africa → World</div>
                    <h2 style={{ marginBottom: '16px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Africa's brands deserve better.<br />We're building the system that delivers it.</h2>
                    <p className='text-white' style={{ maxWidth: '560px', margin: '0 auto 40px' }}>AVATAWorks is not another Lagos agency. It's the AI-driven growth infrastructure African businesses have been waiting for.</p>
                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <PrimaryButton text='Get a Free Strategy Session 🪏' className='btn-white' />
                        <PrimaryButton text='About AVATAWorks 📚' className='btn-primary' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs