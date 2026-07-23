import Footer from '@/components/Footer'
import Stats from '@/components/homePage/Stats'
import Testimonials from '@/components/homePage/Testimonials'
import Navbar from '@/components/Navbar'
import AideSection from '@/components/OurWorks/AideSection'
import CaseStudies from '@/components/OurWorks/CaseStudies'
import ScrollerWorks from '@/components/OurWorks/ScrollerWorks'
import WorksHero from '@/components/OurWorks/WorksHero'
import { connectDb } from '@/lib/mongodb'
import Reviews from '@/models/Reviews'
import { Ireviews } from '@/types'
import { cleanMongoShape } from '@/utils/cleanMongoStructure'

const page = async () => {
    await connectDb();
    const reviews = cleanMongoShape(await Reviews.find().lean<Partial<Ireviews>[]>()).map(review => ({ ...review, _id: review?._id?.toString() }));
    return (
        <div>
            <Navbar />
            <WorksHero />
            <ScrollerWorks />
            <CaseStudies />
            <AideSection />
            <Stats style />
            <Testimonials testimonials={reviews} key="services-Review" />
                <Footer />
        </div>
    )
}


export default page                 