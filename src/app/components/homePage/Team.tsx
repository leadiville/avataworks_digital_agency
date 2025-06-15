import Image from 'next/image'
import React from 'react'

const Team = ({ teamMembers }) => {
    return (
        <div>
            {
                <div className="container-fluid team pb-5">
                    <div className="container pb-5">
                        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                            <h4 className="">Our Team</h4>
                            <h1 className="display-4 mb-4 text-primary">Meet Our Avatas</h1>
                            <p className="mb-0">A powerhouse of advanced virtual assistants in tech and advertising, each bringing exceptional skills, experience, and passion. Driving our clients to digital brand success.
                            </p>
                        </div>
                        <div className="row g-2">
                            {teamMembers.splice(0, 4)?.map((member, memberId) => {
                                const { fullName, skillSet, image } = member;
                                return (
                                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s" key={memberId}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <Image src={`/team/${image}`} className="img-fluid rounded-top w-100" alt="" width={500} height={500} style={{ maxHeight: '300px', minHeight: '300px' }} />
                                                <div className="team-icon">
                                                    <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                                    <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                                    <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                                    <a className="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                                </div>
                                            </div>
                                            <div className="team-title p-4">
                                                <h4 className="mb-0">{fullName}</h4>
                                                <p className="mb-0 text-capitalize">{skillSet}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Team