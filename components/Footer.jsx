import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full py-12 md:py-16">
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <img src="logo.png" className="h-10 w-10 rounded-2xl shadow-2xl object-cover" />
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            AI InterviewAgent
                        </span>
                    </Link>
                    <p className="text-gray-600">Empowering Job Seekers and HR Agencies with AI-driven interview preparation and seamless interview experiences.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-purple-600">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-purple-600">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-600 hover:text-purple-600">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="privacy-policy" className="text-gray-600 hover:text-purple-600">
                                    Privacy
                                </Link>
                            </li>
                            <li>
                                <Link href="terms-of-use" className="text-gray-600 hover:text-purple-600">
                                    Terms
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-8 lg:col-span-3">
                    <p className="text-sm text-gray-600">© 2025 AI InterviewAgent. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <Link href="#" className="text-gray-600 hover:text-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-purple-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer