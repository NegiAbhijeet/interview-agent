import Link from "next/link"
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="border-t border-gray-600 py-12 text-sm" data-aos="fade-up">
            <div className="max-w-7xl w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Branding Section */}
                <div>
                    <Link href="/" className="flex items-center space-x-3">
                        <img src="/logo.png" alt="AI InterviewAgent Logo" className="h-10 w-10 rounded-2xl shadow-lg object-cover" />
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            AI InterviewAgent
                        </span>
                    </Link>
                    <p className="mt-4 text-gray-300">
                        Empowering Job Seekers and Recruiters with AI-driven interview preparation and seamless interview experiences.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-6">
                        <a href="https://x.com/AinterviewAgent" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://www.instagram.com/aiinterviewagents?igsh=ZXQwa2FtdmEwbWZn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                            <FaInstagram size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/ai-interview-agent/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3BJqRT4fS%2BROSIU6vuVd6WCQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-gray-500 font-semibold mb-3">Company</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-300 hover:text-purple-600">About</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-purple-600">Contact</Link></li>
                            <li><Link href="/pricing" className="text-gray-300 hover:text-purple-600">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-gray-500 font-semibold mb-3">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacy-policy" className="text-gray-300 hover:text-purple-600">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-use" className="text-gray-300 hover:text-purple-600">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
                © 2025 AI InterviewAgent. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer
