import { Link, useLoaderData } from 'react-router-dom';
import useTitlte from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const ToyDetails = () => {
    useTitlte('Toy Details')
    const toy = useLoaderData();
    const {user}=useContext(AuthContext)
    const { picture, sellerName, toyName, sellerEmail, price, quantity, description, rating } = toy;

    const handleBuyClick =  () => {
            // Prepare toy data to be added to MongoDB
            const toyData = {
                ...toy,
                userEmail: user?.email 
            };
            fetch('https://kids-zone-server-weld.vercel.app/addcart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
        .then(res=>res.json())
        .then(data => {
                console.log(data)
            })
            Swal.fire({
                position: 'text-center',
                icon: 'success',
                title: 'Successfully add to cart',
                showConfirmButton: false,
                timer: 1500
            })
        }



    return (
        <div className="mt-12 mx-28 flex justify-center">
            <div className="card w-[50%] lg:card-side bg-orange-100  shadow-xl">
                <figure><img src={picture} alt={toyName} className=' p-3' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {toyName}</h2>
                    <div>
                        <p>Seller: {sellerName}</p>
                        <p>Email: {sellerEmail}</p>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Rating: {rating}</p>
                        <p>Description: {description}</p>
                    </div>
                    <Link onClick={handleBuyClick} to='#' className='bg-blue-500 w-fit px-6 py-2 font-bold text-white rounded-xl'>Buy</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;
