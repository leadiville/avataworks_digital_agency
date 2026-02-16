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

            <div className='container py-5'>
                <div className="row gap-2">
                    <div className="col-5 d-flex align-items-end">
                        <div className="">
                            <Image width={500} height={500} alt="get-quote-img" src={"/getQuote/Good team-bro.png"} />
                            <AboutGrowth bg="bg-inherit" />
                        </div>
                    </div>
                    <div className="col-6 bg-white text-primary px-5 d-flex align-items-center form-container">
                        <div>
                            <h4 className="text-capitalized mb-3">Speak to an Avata!<span className="text-primary"><FontAwesomeIcon icon={faBullhorn} width={50} height={100} /></span></h4>
                            <h2 className="text-primary">Let’s build your digital brand success </h2>
                            <QuoteForm initialState={initialState} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default page                                                     