import { AiFillStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const SubCategoryCard = ({ toy }) => {
  const navigate = useNavigate();
  const location=useLocation()
  const {user}=useContext(AuthContext)
  const { picture, toyName, rating, price, quantity } = toy;

  console.log(user)
  const handleViewDetails = (id) => {

    if (user) {
      navigate(`/toy-details/${id}`);
    } else {
      toast.error('You have to log in first to view details');
      <Navigate state={{ from: location }} to="/login" replace></Navigate>;  
    }
  };

  return (
    <div className="flex justify-center">
      <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt={toyName} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{toyName}</h2>
          <div>
            <p>Rating: {rating}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div className="card-actions">
          <button className="btn btn-outline btn-primary" onClick={()=>handleViewDetails(toy._id)}>
              View Details
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default SubCategoryCard;
