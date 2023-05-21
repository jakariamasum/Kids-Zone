import { useContext, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {
    const navigate = useNavigate();
    const [error,setError]=useState('');
    const { googleLogin, signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        const from = location.state?.from?.pathname || '/'
        signIn(email, password)
            .then(res => {
                setError('')
                console.log(res.user)
                Swal.fire({
                    position: 'text-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from,{replace:true});
            })
            .catch(error => {
                console.log(error.message)
                setError('Invalid password or email')
            });
    }
    const handleGoogleSignIn = (event) => {
        event.preventDefault();
        googleLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    position: 'text-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error.message)
                setError("Invalid password or email")
            })
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold mb-2 text-center">Welcome Back!!</h2>
                <small className='flex justify-center mb-4'>Please login here</small>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                        <input type="email" required name='email' id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            required
                            value={password}
                            name='password'
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="button"
                            className="absolute cursor-pointer right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? (
                                <AiFillEye />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </button>
                    </div>
                    <div className="text-center mb-3 text-red-400">{error}</div>
                    <div className="mb-6">
                        <input type="submit" className="w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" value="Login"></input>
                    </div>
                </form>
                <div className="mb-4 text-center">
                    <span className="text-gray-500 text-sm">or</span>
                </div>
                <div className="mb-6">
                    <button onClick={handleGoogleSignIn} className="w-full cursor-pointer flex justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
                        <FaGoogle size={22} />
                        <p>Sign in with Google</p>
                    </button>
                </div>
                <div className="text-center">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
