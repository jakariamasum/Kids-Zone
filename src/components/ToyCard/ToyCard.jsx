import { Link } from "react-router-dom";

const ToyCard = ({toy,indx}) => {
    const {sellerName,toyName,subcategory,price,quantity,_id}=toy;
    console.log(indx)
    return (
        <tr className="text-center">
            <th>{indx}</th>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{subcategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy-details/${_id}`}><button className="btn btn-accent text-white">View Details</button></Link> </td>
        </tr>
    );
};

export default ToyCard;