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
        <div className='container mt-5'>
            <div className="container text-center">
                <h1 className='text-primary my-3 display-3'>
                    {header}
                </h1>
                <h5 className="text-grey">{subheader}</h5>
            </div>
            <div className="row gap-0 my-md-5">
                <div className="col-lg-4">
                    <Image src={img} width={500} height={500} alt='service-image' className='w-100 h-auto' />
                </div>
                <div className="col-lg-8">
                    <div >
                        <h4 className="text-primary"><FontAwesomeIcon className='me-2' icon={faMailForward} />What we deliver</h4>
                        <ul style={{ color: "grey" }} className='my-4'>
                            {whatWeBuild?.map((each, inx) => {
                                return (
                                    <li className='my-lg-1' key={inx} >
                                        {each}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                    <Link href={"/get-quote"} ><PrimaryButton text='Get Quote' className='btn btn-danger p-3 px-5 my-5 text-center w-100 rounded text-center' icon={faPen} /></Link>
            </div>
        </div>
    )
}

export default EachCoreService