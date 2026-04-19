import React from 'react'

const AideSection = () => {
    return (
        <div className="container aide-teaser mb-5 ">
            <div className="aide-grid">

                {/* <!-- Left: Honest positioning copy --> */}
                <div className="aide-left">
                    <div className="aide-eyebrow text-primary"><span className="pdot"></span>Launching in a few weeks · Join the Waitlist</div>
                    <h2>Every result above was<br />built by <em>human AVATAs.</em><br />AIDE makes it faster.</h2>
                    <p>For 4 years, our AVATA team has delivered these results manually — strategy, creative, execution, reporting. That work is real and it's proven. AIDE doesn't replace it. AIDE gives those same expert AVATAs AI-powered tools that let them work 5× faster, handle more brands at once, and deliver at a cost that was never possible before. The quality stays. The speed multiplies.</p>

                    <div className="aide-proof-line">
                        <div className="apl-icon">✅</div>
                        <div className="apl-body">
                            <div className="apl-title">What stays the same: AVATA quality control</div>
                            <div className="apl-sub">Every output — AI-generated or not — is reviewed and approved by a human AVATA before it reaches your brand. That doesn't change with AIDE.</div>
                        </div>
                    </div>
                    <div className="aide-proof-line">
                        <div className="apl-icon">⚡</div>
                        <div className="apl-body">
                            <div className="apl-title">What changes: speed and scale</div>
                            <div className="apl-sub">Content that took days gets drafted in minutes. Campaigns that needed weeks of setup get deployed in hours. Same results — delivered faster than any traditional agency can match.</div>
                        </div>
                    </div>

                    <div className="aide-cta-row">
                        <a href="https://avataworks.com/get-quote" className="btn btn-white">Join the Waitlist →</a>
                        <a href="https://avataworks.com/our-services" className="btn btn-primary">See Our Services</a>
                    </div>
                    <div className="waitlist-badge">
                        <span className="wb-dot"></span>
                        <span className="text-primary"><strong className='text-white'>Early access pricing</strong> locked in for waitlist members</span>
                    </div>
                </div>

                {/* <!-- Right: Velocity visual --> */}
                <div className="aide-right">
                    <div className="av-header">Delivery speed comparison</div>

                    <div className="vel-item">
                        <div className="vel-label">Brand brief → first draft</div>
                        <div className="vel-bars">
                            <div className="vel-bar-row">
                                <div className="vel-bar-bg"><div className="vel-bar-fill vb-manual w-100"></div></div>
                                <span className="vel-tag vt-now">2–3 days</span>
                            </div>
                            <div className="vel-bar-row">
                                <div className="vel-bar-bg"><div className="vel-bar-fill vb-aide" style={{ width: '18%', animation: 'none' }}></div></div>
                                <span className="vel-tag vt-soon">~30 mins ⚡</span>
                            </div>
                        </div>
                    </div>

                    <div className="vel-item">
                        <div className="vel-label">Monthly content calendar</div>
                        <div className="vel-bars">
                            <div className="vel-bar-row">
                                <div className="vel-bar-bg"><div className="vel-bar-fill vb-manual w-100"></div></div>
                                <span className="vel-tag vt-now">1–2 weeks</span>
                            </div>
                            <div className="vel-bar-row">
                                <div className="vel-bar-bg"><div className="vel-bar-fill vb-aide" style={{ width: '14%' }}></div></div>
                                <span className="vel-tag vt-soon">~2 hours ⚡</span>
                            </div>
                        </div>
                    </div>

                    <div className="vel-item">
                        <div className="vel-label">Ad campaign setup</div>
                        <div className="vel-bars">
                            <div className="vel-bar-row">
                                <div className="vel-bar-bg"><div className="vel-bar-fill vb-manual" style={{ width: '100%' }}></div></div>
                                <span className="vel-tag vt-now">3–5 days</span>
                            </div>
                            <div className="vel-bar-row">
                                <div className="vel-bar-bg"><div className="vel-bar-fill vb-aide" style={{ width: '12%' }}></div></div>
                                <span className="vel-tag vt-soon">~4 hours ⚡</span>
                            </div>
                        </div>
                    </div>

                    <div className="vel-item">
                        <div className="vel-label">Performance report</div>
                        <div className="vel-bars">
                            <div className="vel-bar-row">
                                <div className="vel-bar-bg"><div className="vel-bar-fill vb-manual" style={{ width: '100%' }}></div></div>
                                <span className="vel-tag vt-now">2–3 days</span>
                            </div>
                            <div className="vel-bar-row">
                                <div className="vel-bar-bg"><div className="vel-bar-fill vb-aide" style={{ width: '10%' }}></div></div>
                                <span className="vel-tag vt-soon">Auto-live ⚡</span>
                            </div>
                        </div>
                    </div>

                    <div className="vel-legend">
                        <div className="vleg"><div className="vleg-dot vd-now"></div><span className="vleg-txt">Our current AVATA delivery</span></div>
                        <div className="vleg"><div className="vleg-dot vd-soon"></div><span className="vleg-txt">AIDE — coming soon</span></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AideSection