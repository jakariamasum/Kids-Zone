import { Link } from "react-router-dom";

const MyToyRow = ({ toy, indx, handleDelete }) => {
    const { toyName, picture, price, rating, quantity, subcategory, _id } = toy;



    return (
        <>
            <tr className="text-center">
                <th>{indx}</th>
                <td>{<img src={picture} className="h-[100px] w-[150px]" />}</td>
                <td>{toyName}</td>
                <td>{subcategory}</td>
                <td>{price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td><Link to={`/update/${_id}`}><button  className="btn btn-success text-white">Update</button></Link> </td>
                <td><button onClick={() => handleDelete(_id)} className="btn btn-error text-white">Delete</button></td>
            </tr>

        </>
    );
};

export default MyToyRow;