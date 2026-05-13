import { faArrowRight, faMailForward, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';
import Badge from '../Badge';


interface ICoreServices {
    header: string;
    subheader: string;
    img: string;
    whatWeBuild: string[] | undefined;
    title: string;
}

const EachCoreService = ({ header, subheader, img, whatWeBuild, title }: ICoreServices) => {
    return (
        <div className='mb-5 pt-5 px-4 bg-primaryLight position-relative z-1 p-lg-5 rounded px-lg-0 px-3 container'>
            <div className="px-lg-5">
                <div className="text-center">
                    <Badge text={title} textStyle='text-primary' style="bg-primaryLight text-uppercase fw-bold" key={title + "-key"} />

                    <h2 className='text-primary'>
                        {header}
                    </h2>
                    <div className="d-lg-flex justify-content-center align-items-center px-3">
                        <p className="col-12 col-lg-10  ">{subheader}</p>
                    </div>
                </div>
                <div className="row px-4 d-lg-flex align-items-center justify-content-center">
                    <div className="col-lg-5 gap-2 p-lg- p-0 order-2" >
                        <div className='text-start my-4'>
                            <p style={{ color: "grey" }} className=''>
                                {whatWeBuild?.map((each, inx) => {
                                    return (
                                        <span className='px-lg-3 my-lg-3  d-flex align-items-center gap-3' key={inx} >
                                            {<FontAwesomeIcon icon={faArrowRight} className='' />}
                                            <small className=''>{each}</small>
                                        </span>
                                    )
                                })}
                            </p>
                        </div>

                        <Link href={"/get-quote"} className='w-100' style={{ textDecoration: "none" }}>
                            <PrimaryButton text='Get Started' className='btn btn-danger w-100' icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className="col-lg-4 p-0 text-center rounded order-first order-lg-2">
                        <Image src={img} width={500} height={400} alt='service-image' className='w-lg-auto h-lg-fit w-100 h-auto p-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EachCoreService