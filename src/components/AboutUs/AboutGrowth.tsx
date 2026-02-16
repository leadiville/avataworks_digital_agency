"use client";
import Link from 'next/link'
import PrimaryButton from '../PrimaryButton'
import { usePathname } from 'next/navigation'

type About = {
    bg: string;
}

const AboutGrowth = ({ bg }: About) => {
    const path = usePathname();
    return (
        <div className={`${bg} rounded p-lg-5 p-sm-0 h-100 mt-4`}>
            <div className="row g-4 justify-content-center w-100 p-4">
                <div className="col-12">
                    <div className="counter-item bg-light rounded p-3 h-100">
                        <div className="counter-counting">
                            <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">200</span>
                            <span className="h1 fw-bold text-primary">%</span>
                        </div>
                        <h4 className="mb-0 text-dark">Profit Increase</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="counter-item bg-light rounded p-3 h-100">
                        <div className="counter-counting">
                            <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">20</span>
                            <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0 text-dark">Brands Managed</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="counter-item bg-light rounded p-3 h-100">
                        <div className="counter-counting">
                            <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">30</span>
                            <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0 text-dark">Skilled Avatas</h4>
                    </div>
                </div>
                <div className="col-12">
                    <div className="counter-item bg-light rounded p-3 h-100">
                        <div className="counter-counting">
                            <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">4</span>
                            <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0 text-dark">Success Years</h4>
                    </div>
                </div>
            </div>
            {/* get a quote here */}
            {path !== "/get-quote" && <div className="col-12 text-center wow fadeInUp pt-4">
                {/* {services.length <= 4 && <a className="btn btn-primary rounded-pill py-3 px-5" href="#"></a>} */}
                <Link href={"/our-services"} ><PrimaryButton text='Get a Quote' className='py-3 px-5 btn-danger' /></Link>
            </div>}
        </div>
    )
}

export default AboutGrowth