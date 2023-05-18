import moment from "moment/moment";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    const [localTime, setLocalTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));

    useEffect(() => {
        const interval = setInterval(() => {
            setLocalTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <footer className="bg-gray-800 mt-28">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <img src="https://i.ibb.co/wwtjw9L/kids-zone-fun-play-banner-design-1017-33753.jpg" alt="Logo" className="h-8 w-auto" />
                        <span className="ml-2 text-lg font-semibold">Kids Zone</span>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-4">
                        <Link to="/" className="text-gray-300 hover:text-white mr-4">Home</Link>
                        <Link to="/about" className="text-gray-300 hover:text-white mr-4">About</Link>
                        <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center mt-8">
                    <div className="flex items-center mr-6">
                        <Link to="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaTwitter size={28} />
                        </Link>
                    </div>
                    <div className="flex items-center mr-6">
                        <Link to="https://github.com/jakariamasum" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaGithub size={25} />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <Link to="https://facebook.com/md.jakaria.masum.31" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaFacebook size={28} />
                        </Link>
                    </div>
                </div>
                <div className="mt-8 leading-loose text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kids Zone. All rights reserved.</p>
                    <p>12/3 NS Road, Kushtia, Bangladesh</p>
                    <p>Email: kidszone@gmail.com | Phone: +1 123 456 7890</p>
                    <p>{localTime};</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
