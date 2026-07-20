"use client";
import { IOurTeam } from '@/types'
import Image from 'next/image'
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { faPeopleGroup} from '@fortawesome/free-solid-svg-icons';
import ScrollAnimate from '@/utils/ScrollAnimate';

interface TeamProps {
    teamMembers: IOurTeam[];
}

const Team = ({ teamMembers }: TeamProps) => {
    const path = usePathname();
    return (

        <div className="container-fluid team py-lg-5 position-relative z-1 bg-primaryLight ">
            <div className="container py-5">
                <ScrollAnimate>
                    <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: "800px" }}>
                        <h2 className="mb-4 text-primary">Meet Our Avatas</h2>
                        <p className="mb-0">A powerhouse of advanced virtual assistants in marketing and tech, individually bringing exceptional skills, experience, and passion to deliver digital brand success for our clients.
                        </p>
                    </div>
                </ScrollAnimate>
                <div className="row g-2">

                    {teamMembers?.map((member, memberId) => {
                        const { fullName, skillSet, image } = member;
                        return (
                            <div className={`${path === "/" ? 'col-xl-3' : 'col-xl-4'} col-md-6 wow fadeInUp mb-4`} key={memberId}>
                                <ScrollAnimate>
                                    <div className="team-item">
                                        <div className="team-img delay-4" style={{ minHeight: `${path === "/" ? '320px' : '400px'}` }}>
                                            <Image src={`/team/${image}`} className="img-fluid rounded-top w-100 h-100" alt="" fill sizes='(max-width: 768px) 100px 250px' />
                                            <div className="team-icon">
                                                <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-primary btn-sm-square rounded-pill mb-2" href=""><i className="fab fa-linkedin-in"></i></a>
                                                <a className="btn btn-primary btn-sm-square rounded-pill mb-0" href=""><i className="fab fa-instagram"></i></a>
                                            </div>
                                        </div>
                                        <div className="team-title p-4 delay-2">
                                            <h4 className="mb-0">{fullName}</h4>
                                            <p className="mb-0 text-capitalize text-white">{skillSet}</p>
                                        </div>
                                    </div>
                                </ScrollAnimate>
                            </div>
                        )
                    })}
                    <div className="w-100 d-flex justify-content-center py-5">

                        {(path == "/") && <Link href="/about"><PrimaryButton text='Meet our Avatas' className='btn-primary' icon={faPeopleGroup} /></Link>}
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Team