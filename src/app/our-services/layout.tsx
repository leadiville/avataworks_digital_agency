import { PropsWithChildren } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { connectDb } from '@/lib/mongodb';

const servicesLayout = async ({ children }: PropsWithChildren) => {
    await connectDb();
    return (
        <div>
            <div className="grid-bg z-1"></div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default servicesLayout;