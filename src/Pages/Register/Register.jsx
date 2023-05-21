import { useContext, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { getAuth, updateProfile } from 'firebase/auth'
import useTitlte from '../../hooks/useTitle';
const auth = getAuth()

const Register = () => {
    useTitlte('Register')
    const [err,setErr]=useState('');
    const navigate = useNavigate();
    const { createUser, logOut } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');


    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoURL.value;
        const password = form.password.value;
        console.log(password)
        if (password.length < 6) {
            setErr('Password must at least 6 character')
            return;
        }

        createUser(email, password)
            .then(res => {
                Swal.fire({
                    position: 'text-center',
                    icon: 'success',
                    title: 'Registration Successful! Please login',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(res.user)
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                }).then(() => {
                    logOut()
                        .then(res => {
                            form.reset();
                            setPassword('');
                        })
                        .catch(error => console.log(error.message))
                        setErr('')
                    navigate('/login')
                }).catch((error) => {
                    console.log(error.message)
                });

            })
            .catch(error => console.log(error.message))
    }

    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-7">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-semibold mb-2 text-center">Hello from Kids Zone</h2>
                <small className='flex justify-center mb-4'>Please register here</small>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                        <input  type="text" id="name" name='name' className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                        <input required type="email" name='email' id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="mb-6 relative">
                        <label  htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            required
                            name='password'
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform  text-gray-500 focus:outline-none"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? (
                                <AiFillEye />
                            ) : (
                                <AiFillEyeInvisible />
                            )}
                        </button>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-gray-700 text-sm font-medium mb-1">Photo URL</label>
                        <input type="text" name='photoURL' id="photoURl" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    </div>
                    <div className="text-center mb-3 text-red-400"><p>{err}</p></div>
                    <div className="mb-6">
                        <input type="submit" className="w-full cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" value="Register"></input>
                    </div>
                </form>

                <div className="text-center">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
