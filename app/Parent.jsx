"use client";
import { Navbar } from '@/components/navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/ctaSection';
import { useEffect } from 'react';

const Parent = ({ children }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* <LaunchToast /> */}
            <Navbar />
            {/* <Menu /> */}
            {children}
            <CtaSection />
            <Footer />
        </div>
    )
}

export default Parent
