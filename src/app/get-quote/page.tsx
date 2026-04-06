import AboutGrowth from "@/components/AboutUs/AboutGrowth"
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
                <div className="row gap-1">
                    <div className="col-lg-6 d-lg-flex align-items-end">
                        <div className="d-flex align-items-center h-100">
                            <Image width={400} height={800} className="w-100 h-auto" alt="get-quote-img" src={"/getQuote/Good team-bro.png"} />
                        </div>
                    </div>
                    <div className="container col-lg-5 bg-white text-primary d-flex align-items-center form-container">
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