import { faMailForward, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import PrimaryButton from '../PrimaryButton';
import Link from 'next/link';


interface ICoreServices {
    header: string;
    subheader: string;
    img: string;
    whatWeBuild: string[] | undefined;
}

const EachCoreService = ({ header, subheader, img, whatWeBuild, }: ICoreServices) => {
    return (
        <div className='container pb-lg-5'>
            <div className="container text-center pt-lg-5">
                <h2 className='text-primary my-3'>
                    {header}
                </h2>
                <div className="d-lg-flex justify-content-center align-items-center">
                    <p className="col-12 col-lg-10 text-grey">{subheader}</p>
                </div>
            </div>
            <div className="d-lg-flex justify-content-center align-items-center">
                <div className="col-lg-4 p-0 text-center bg-primaryLight rounded">
                    <Image src={img} width={500} height={420} alt='service-image' className='w-lg-fit h-lg-fit w-auto h-fit p-0' />
                </div>
                <div className="col-lg-8 bg-white z-1 p-4">
                    <div className='p-0'>
                        <h4 className="text-primary"><FontAwesomeIcon className='me-2' icon={faMailForward} />What we deliver</h4>
                        <ul style={{ color: "grey" }} className='my-4'>
                            {whatWeBuild?.map((each, inx) => {
                                return (
                                    <li className='my-lg-1 d-inline-block' key={inx} >
                                        {each}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <Link href={"/get-quote"}><PrimaryButton text='Get Quote' className='btn btn-danger w-100' icon={faPen} /></Link>
                </div>
            </div>

        </div>
    )
}

export default EachCoreService