import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 fixed top-0 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src="https://i.ibb.co/wwtjw9L/kids-zone-fun-play-banner-design-1017-33753.jpg" alt="Logo" className="h-8 w-auto" />
                        <h1 className="text-white text-lg font-semibold ml-2">Kids Zone</h1>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <Link to="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to="/blog" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Blog</Link>
                    </div>
                    <div className="flex items-center">
                        <Link to="/login" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
