import { IOurTeam } from '@/types'
import Image from 'next/image'
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';

interface TeamProps {
    teamMembers: IOurTeam[];
}
const Team = ({ teamMembers }: TeamProps) => {
    return (

        <div className="container-fluid team pb-5 pt-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: "800px" }}>
                    <h1 className="display-4 mb-4 text-primary">Meet Our Avatas</h1>
                    <p className="mb-0">A powerhouse of advanced virtual assistants in tech and advertising, each bringing exceptional skills, experience, and passion. Driving our clients to digital brand success.
                    </p>
                </div>
                <div className="row g-2">
                    {teamMembers?.map((member, memberId) => {
                        const { fullName, skillSet, image } = member;
                        return (
                            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp mb-4" key={memberId}>
                                <div className="team-item">
                                    <div className="team-img">
                                        <Image src={`/team/${image}`} className="img-fluid rounded-top w-100" alt="" width={500} height={500} />
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
                    <div className="w-100 d-flex justify-content-center">

                        {<Link href="/about"><PrimaryButton text='Meet our Avatas' className='btn-primary w-auto py-3' /></Link>}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Team