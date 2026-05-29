"use client";
import ScrollAnimate from '@/utils/ScrollAnimate';
import PrimaryButton from '../PrimaryButton'
const AboutUs = () => {
    return (
        <section className='bg-primary pb-4'>
            <div className="py-5 container">
                <ScrollAnimate>
                    <div className="container text-center py-4 text-white">
                        <div className="py-lg-1 d-inline-block px-lg-4 rounded-pill mb-4 text-white bg-primaryLighter">🌍 Lagos → Africa → World</div>
                        <h2 style={{ marginBottom: '16px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>Africa's brands deserve better.<br />We're building the system that delivers it.</h2>
                        <p className='text-white' style={{ maxWidth: '560px', margin: '0 auto 40px' }}>AVATAWorks is not another Lagos agency. It's the AI-driven growth infrastructure businesses have been waiting for.</p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <PrimaryButton text='Get a Free Strategy Session 🪏' className='btn-white border' />
                            <PrimaryButton text='About AVATAWorks 📚' className='btn-primary' />
                        </div>
                    </div>
                </ScrollAnimate>
            </div>
        </section>
    )
}

export default AboutUs