import { PropsWithChildren } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FooterM from '../../models/Footer';
import { Ifooter } from '@/types';
import { connectDb } from '@/lib/mongodb';

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