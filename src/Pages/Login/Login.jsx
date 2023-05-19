import { useState } from 'react';
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import {FaGoogle} from 'react-icons/fa'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleGoogleSignIn=()=>{

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-2 text-center">Welcome Back!!</h2>
        <small className='flex justify-center mb-4'>Please login here</small>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <AiFillEye/>
              ) : (
                <AiFillEyeInvisible/>
              )}
            </button>
          </div>
          <div className="mb-6">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
          </div>
        </form>
        <div className="mb-4 text-center">
          <span className="text-gray-500 text-sm">or</span>
        </div>
        <div className="mb-6">
          <button onClick={handleGoogleSignIn} className="w-full flex justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
            <FaGoogle size={22}/>
            <p>Sign in with Google</p>
          </button>
        </div>
        <div className="text-center">
          <p>
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
