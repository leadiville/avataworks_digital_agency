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
            <div className='container py-lg-5 pb-lg-5'>
                <div className="row gap-2">
                    <div className="col-lg-5 d-lg-flex align-items-end">
                        <div className="">
                            <Image width={400} className="w-100 h-100" height={400} alt="get-quote-img" src={"/getQuote/Good team-bro.png"} />
                        </div>
                            {<AboutGrowth bg="bg-inherit" />}
                    </div>
                    <div className="col-lg-6 bg-white text-primary px-5 d-flex align-items-center form-container">
                        <div>
                            <h4 className="text-capitalized mb-3 fw-bold">Speak to an Avata!<span className="text-primary"><FontAwesomeIcon icon={faBullhorn} width={50} height={100} /></span></h4>
                            <h2 className="text-black">Let’s build your digital brand success! </h2>
                            <QuoteForm initialState={initialState} />
                        </div>
                    </div>
                    {/* {<AboutGrowth bg="bg-inherit" />} */}
                </div>
            </div>
        </div >
    )
}

export default page                                                     