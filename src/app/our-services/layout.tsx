import { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { connectDb } from '../../../lib/mongodb';
import FooterM from '../../../models/Footer';
import { Ifooter } from '@/types';

const servicesLayout = async ({ children }: PropsWithChildren) => {
    await connectDb();
    const footer =  await FooterM.find().lean<Partial<Ifooter>>()
    return (
        <div>
            <Navbar />
            {children}
            <Footer footer={footer} />
        </div>
    );
}

export default servicesLayout;