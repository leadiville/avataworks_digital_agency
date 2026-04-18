import Stats from '@/components/homePage/Stats'
import Navbar from '@/components/Navbar'
import AideSection from '@/components/OurWorks/AideSection'
import CaseStudies from '@/components/OurWorks/CaseStudies'
import ScrollerWorks from '@/components/OurWorks/ScrollerWorks'
import WorksHero from '@/components/OurWorks/WorksHero'

const page = () => (
    <div className=''>
        <Navbar />
        <WorksHero />
        <Stats />
        <ScrollerWorks />
        <CaseStudies />
        <AideSection />
    </div>
)


export default page                 