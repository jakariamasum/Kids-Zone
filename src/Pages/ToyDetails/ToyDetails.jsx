import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { picture, sellerName, toyName, sellerEmail, price, quantity, description, rating } = toy;
    return (
        <div className="mt-12 mx-28 flex justify-center">
            <div className="card w-[50%] lg:card-side bg-orange-100  shadow-xl">
                <figure><img src={picture} alt={toyName} className='h-[350px] w-[350px] p-3' /></figure>
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
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;