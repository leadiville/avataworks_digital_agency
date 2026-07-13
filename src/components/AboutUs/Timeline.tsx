
import React from 'react'
import Stats from '../homePage/Stats'

export const Timeline = () => {
    return (
        <div className=''>
            <Stats style/>
            <section className="sec py-5">
                <div className="c" style={{ maxWidth: '720px' }}>
                    <div className="sec-hdr">
                        <div className="badge my-lg-5">
                            <span className="bdot"></span>Our Journey
                        </div>
                        <h2>4 Years of Proving the Model</h2>
                    </div>
                    <div className="tl">
                        <div className="tli">
                            <div className="tld">22
                            </div><div className="tlc">
                                <h4>2022 - Built in Lagos</h4><p>Avataworks launched as a full-service digital agency in Lagos, Nigeria.</p>
                            </div>
                        </div>
                        <div className="tli">
                            <div className="tld">23</div>
                            <div className="tlc">
                                <h4>2023 - First Brands Onboarded</h4>
                                <p>First 3 client brands onboarded. The Avata model was built.</p>
                            </div>
                        </div>
                        <div className="tli">
                            <div className="tld">24</div>
                            <div className="tlc">
                                <h4>2024 - Scale &amp; Systems</h4>
                                <p>10+ brands managed. 10× ROAS. Internship program launched. 10+ trained Avatas.</p>
                            </div>
                        </div>
                        <div className="tli">
                            <div className="tld">25</div>
                            <div className="tlc">
                                <h4>2025 - Revenue Milestone</h4><p>₦30M+ revenue generated for clients. AI-native migration strategy formalized.</p>
                            </div>
                        </div>
                        <div className="tli">
                            <div className="tld">26</div>
                            <div className="tlc">
                                <h4>2026 - AI Migration Begins</h4>
                                <p>Full AI stack deployed internally. avataworks.com live. Target: 30 AI-Native clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}
