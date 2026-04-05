
import React from 'react'
import Stats from '../homePage/Stats'

export const Timeline = () => {
    return (
        <div className=''>
            <Stats />
            <section className="sec sec-alt">
                <div className="c" style={{ maxWidth: '720px' }}>
                    <div className="sec-hdr">
                        <div className="badge">
                            <span className="bdot"></span>Our Journey
                        </div>
                        <h2>4 Years of Proving the Model</h2>
                    </div>
                    <div className="tl">
                        <div className="tli">
                            <div className="tld">21
                            </div><div className="tlc">
                                <h4>2021 — Founded in Lagos</h4><p>AVATAWorks registered and launched as a full-service digital agency in Lagos, Nigeria.</p>
                            </div>
                        </div>
                        <div className="tli">
                            <div className="tld">22</div>
                            <div className="tlc">
                                <h4>2022 — First Brands Onboarded</h4>
                                <p>First 3 client brands onboarded. AVATA team built. Internship program launched.</p>
                            </div>
                        </div>
                        <div className="tli">
                            <div className="tld">23</div>
                            <div className="tlc">
                                <h4>2023 — Scale &amp; Systems</h4>
                                <p>20+ brands managed. 10× ROAS campaigns. 10+ certified AVATAs trained.</p>
                            </div>
                        </div>
                        <div className="tli">
                            <div className="tld">24</div>
                            <div className="tlc">
                                <h4>2024 — Revenue Milestone</h4><p>₦30M+ revenue generated for clients. AI-native migration strategy formalized.</p>
                            </div>
                        </div>
                        <div className="tli">
                            <div className="tld">25</div>
                            <div className="tlc">
                                <h4>2025 — AI Migration Begins</h4>
                                <p>Full AI stack deployed internally. avataworks.com live. AVATA OS architecture designed.</p>
                            </div>
                        </div>
                        <div className="tli" style={{ paddingBottom: '0' }}>
                            <div className="tld" style={{ background: 'var(--primaryLighter)' }}>26</div>
                            <div className="tlc">
                                <h4>2026 — AVATA OS Launch</h4>
                                <p>AIDE model fully active. AVATA OS MVP in development. Target: 50 AI subscription clients.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}
