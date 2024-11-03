import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-3">
            <div className="max-w-6xl mx-auto px-4">
                {/* Links Section */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm">
                    {/* Left Links */}
                    <div className="flex space-x-4">
                        <Link href="/terms-of-service" className="hover:text-blue-400 transition duration-200">
                            Terms of Service
                        </Link>
                        <Link href="/privacy-policy" className="hover:text-blue-400 transition duration-200">
                            Privacy Policy
                        </Link>
                        <Link href="/about" className="hover:text-blue-400 transition duration-200">
                            About
                        </Link>
                        <Link href="/contact" className="hover:text-blue-400 transition duration-200">
                            Contact
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <Link href="https://github.com/MYousuf-Codes" target="_blank" className="hover:text-blue-400 transition duration-200">
                            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com/in//MYousuf-Codes" target="_blank" className="hover:text-blue-400 transition duration-200">
                            <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                        </Link>
                        <Link href="https://facebook.com/muhammadyousafmarfaniMYM" target="_blank" className="hover:text-blue-400 transition duration-200">
                            <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.instagram.com/m_yousuf575/" target="_blank" className="hover:text-blue-400 transition duration-200">
                            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Separator */}
                <div className="my-2 border-t border-gray-700"></div>

                {/* Copyright Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    <p className="mt-1 md:mt-0">
                        Made with <span className="text-red-500">❤</span> by Muhammad Yousuf
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
