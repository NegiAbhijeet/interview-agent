import { Navbar } from '@/components/navbar';
import Footer from '@/components/Footer';
import Menu from "@/components/Menu/menus"
const Parent = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Menu />
            {children}
            <Footer />
        </div>
    )
}

export default Parent
