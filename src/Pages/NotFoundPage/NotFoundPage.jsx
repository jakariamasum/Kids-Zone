import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="https://i.ibb.co/cTShYFk/oops-404-error-with-broken-robot-concept-illustration-114360-1932.jpg"
        alt="404 Error"
        className="max-w-sm w-full mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-gray-600 text-lg mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
