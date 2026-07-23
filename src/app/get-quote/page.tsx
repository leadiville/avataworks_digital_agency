
import QuoteForm from "@/components/getQuote/QuoteForm";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"


const page = () => {
    const initialState = {
        name: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
    }
    return (
        <div className="bg-primary">
            <div className='container py-lg-5 pb-5'>
                <div className="row">
                    <div className="container col-lg-7 h-100">
                        <div className="d-lg-flex w-100 h-100 align-items-center">
                            <Image width={400} height={800} className="w-auto h-auto" alt="get-quote-img" src={"/getQuote/Good team-bro.png"} />
                        </div>
                    </div>
                    <div className="container col-lg-5 bg-white text-primary form-container">
                        <div>
                            <h4 className="text-capitalized mb-3 fw-bold">Speak to an Avata!<span className="text-primary"><FontAwesomeIcon icon={faBullhorn} width={50} height={100} /></span></h4>
                            <h2 className="text-black text-capitalize">Let’s build your digital brand success! </h2>
                            <QuoteForm initialState={initialState} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    ) 
 }

export default page                                                  