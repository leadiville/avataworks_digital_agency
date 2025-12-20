

import { PropsWithChildren } from 'react';
import Navbar from '../components/Navbar';

const AboutLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default AboutLayout;