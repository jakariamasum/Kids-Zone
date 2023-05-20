
const MyToyRow = ({toy,indx}) => {
    const {name,photoUrl,sellerName,sellerEmail,price,rating,quantity,subCategory,_id}=toy;
    return (
        <tr className="text-center">
            <th>{indx}</th>
            <td>{photoUrl}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td><button className="btn btn-success text-white">Update</button></td>
            <td><button className="btn btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default MyToyRow;