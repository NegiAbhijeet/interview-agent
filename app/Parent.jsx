import { Navbar } from '@/components/navbar';
import Footer from '@/components/Footer';
// import Menu from "@/components/Menu/menus"
import LaunchToast from "@/components/LaunchToast"
const Parent = ({ children }) => {
    return (
        <div>
            <LaunchToast />
            <Navbar />
            {/* <Menu /> */}
            {children}
            <Footer />
        </div>
    )
}

export default Parent
