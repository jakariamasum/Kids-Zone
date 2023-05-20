import { useState } from "react";
import Modal from 'react-modal';

const MyToyRow = ({ toy, indx,handleDelete }) => {
    const { toyName, picture, price, rating, quantity, subcategory,_id } = toy;
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleUpdate = () => {
        // Perform update operation here
        closeModal();
    };
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
                <td><button onClick={openModal} className="btn btn-success text-white">Update</button></td>
                <td><button onClick={() => handleDelete(_id)} className="btn btn-error text-white">Delete</button></td>
            </tr>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <h2>Update Information</h2>
                {/* Add form fields for price, quantity, description */}
                <div className="text-center">
                    <form>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input type="text" id="price" />
                        </div>
                        <div>
                            <label htmlFor="quantity">Quantity</label>
                            <input type="text" id="quantity" />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea id="description" rows="4" />
                        </div>
                        <button className="btn btn-primary" onClick={handleUpdate}>
                            Update
                        </button>
                        <button className="btn btn-secondary" onClick={closeModal}>
                            Cancel
                        </button>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default MyToyRow;