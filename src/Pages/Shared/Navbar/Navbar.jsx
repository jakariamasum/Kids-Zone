import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "See you later!!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error.message));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/wwtjw9L/kids-zone-fun-play-banner-design-1017-33753.jpg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-white text-lg font-semibold ml-2">Kids Zone</h1>
          </Link>
          <div className="hidden md:flex items-center justify-center flex-1">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/toys"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              All Toys
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </Link>
          </div>
          <div className="flex items-center">
            {user ? (
              <>
                <Link
                  to="/my-toys"
                  className="hidden md:flex text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  My Toys
                </Link>
                <Link
                  to="/add-toys"
                  className="hidden md:flex text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add A Toy
                </Link>
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    {user.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt={user?.displayName}
                        title={user?.displayName}
                      />
                    ) : (
                      <img
                        src="https://i.ibb.co/F0wKcw6/709699.png"
                        title={user?.displayName}
                      />
                    )}
                  </div>
                </div>
                <Link
                  onClick={handleLogOut}
                  to="/"
                  className="hidden md:flex text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  LogOut
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
            <button
              className="md:hidden text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu className="ml-4"/>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-2">
            <Link
              to="/"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/toys"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium"
            >
              All Toys
            </Link>
            <Link
              to="/blog"
              className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium"
            >
              Blog
            </Link>
            {user && (
              <>
                <Link
                  to="/my-toys"
                  className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium"
                >
                  My Toys
                </Link>
                <Link
                  to="/add-toys"
                  className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium"
                >
                  Add A Toy
                </Link>
              </>
            )}
            {user ? (
              <Link
                onClick={handleLogOut}
                to="/"
                className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium"
              >
                LogOut
              </Link>
            ) : (
              <Link
                to="/login"
                className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
