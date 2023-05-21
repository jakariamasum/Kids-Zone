import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/AuthProvider";

const ToyCard = ({ toy, indx }) => {
    const { user } = useContext(AuthContext)
    const { sellerName, toyName, subcategory, price, quantity, _id } = toy;
    console.log(indx)
    const handleViewDetails = () => {
        if (!user) {
            toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT,

                
            });
        }
    };
    return (
        <tr className="text-center">
            <th>{indx}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy-details/${_id}`}><button onClick={handleViewDetails} className="btn btn-accent text-white">View Details</button></Link> </td>
            <ToastContainer />
        </tr>
    );
};

export default ToyCard;