
const ToyCard = ({toy,indx}) => {
    const {seller,toyName,subCategory,price,quantity}=toy;
    console.log(indx)
    return (
        <tr className="text-center">
            <th>{indx}</th>
            <td>{seller}</td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className="btn btn-accent text-white">View Details</button></td>
        </tr>
    );
};

export default ToyCard;