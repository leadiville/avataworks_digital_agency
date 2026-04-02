import { PropsWithChildren } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { connectDb } from '@/lib/mongodb';

const servicesLayout = async ({ children }: PropsWithChildren) => {
    await connectDb();
    return (
        <>
            <Navbar />
            {children}
            <Footer/>
        </>
    );
}

export default servicesLayout;