"use client";
import { Navbar } from '@/components/navbar';
import Footer from '@/components/Footer';
import LaunchToast from "@/components/LaunchToast"
import CtaSection from '@/components/ctaSection';

const Parent = ({ children }) => {
    return (
        <div>
            <LaunchToast />
            <Navbar />
            {/* <Menu /> */}
            {children}
            <CtaSection />
            <Footer />
        </div>
    )
}

export default Parent
