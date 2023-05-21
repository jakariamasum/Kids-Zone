import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitlte from "../../hooks/useTitle";

const AddToy = () => {
    useTitlte('Add a toy')
    const {user}=useContext(AuthContext);

    const handleAddToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const picture = form.photoURL.value;
        const sellerName = user?.displayName;
        const sellerEmail = user.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
         console.log(picture,name,sellerEmail,sellerName,subCategory,price,rating,quantity,description)
        const newToy = {
            toyName:name,
            picture,
            sellerName,
            sellerEmail,
            subcategory:subCategory,
            price,
            rating,
            quantity,
            description
        }
        fetch('http://localhost:5000/my-toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data => {
                console.log(data)
            })
            Swal.fire({
                position: 'text-center',
                icon: 'success',
                title: 'New Toy add successful',
                showConfirmButton: false,
                timer: 1500
            })
            form.reset();
    }


    return (
        <div className="max-w-xl mx-auto mt-16">
            <h1 className="text-2xl font-bold mb-10 text-center">Please fill-up this form</h1>
            <form onSubmit={handleAddToy}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="pictureUrl">Picture URL of the toy</label>
                        <input type="text" name='photoURL' id="photoURL" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="name">Name</label>
                        <input type="text" name='name' id="name" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="sellerName">Seller Name</label>
                        <input type="text" defaultValue={user.displayName?user.displayName: ''} readOnly  name='sellerName' id="sellerName" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="sellerEmail">Seller Email</label>
                        <input type="email" defaultValue={user.email} readOnly name='sellerEmail' id="sellerEmail" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="subCategory">Sub-category</label>
                        <input type="text" name='subCategory' id="subCategory" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="price">Price</label>
                        <input type="number" name='price' id="price" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="rating">Rating</label>
                        <input type="number" name='rating' id="rating" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="quantity">Available Quantity</label>
                        <input type="number" name='quantity' id="quantity" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="description">Detail Description</label>
                        <textarea id="description" name='description' className="w-full px-3 py-2 border rounded"></textarea>
                    </div>
                </div>
                <div className="text-center">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-xl" type="submit">Add Toy</button>
                </div>
            </form>
        </div>
    );
};

export default AddToy;
