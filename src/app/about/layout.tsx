import { PropsWithChildren } from 'react';
import Navbar from '../../components/Navbar';

const AboutLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <div className="grid-bg z-1"></div>
            <Navbar />
            {children}
        </div>
    );
};

export default AboutLayout;