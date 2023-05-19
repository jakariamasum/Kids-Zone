const AddToy = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="max-w-xl mx-auto mt-16">
            <h1 className="text-2xl font-bold mb-10 text-center">Please fill-up this form</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-4'>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="pictureUrl">Picture URL of the toy</label>
                        <input type="text" id="pictureUrl" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="name">Name</label>
                        <input type="text" id="name" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="sellerName">Seller Name</label>
                        <input type="text" id="sellerName" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="sellerEmail">Seller Email</label>
                        <input type="email" id="sellerEmail" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="subCategory">Sub-category</label>
                        <input type="text" id="subCategory" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="price">Price</label>
                        <input type="number" id="price" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="rating">Rating</label>
                        <input type="number" id="rating" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="quantity">Available Quantity</label>
                        <input type="number" id="quantity" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold mb-2" htmlFor="description">Detail Description</label>
                        <textarea id="description" className="w-full px-3 py-2 border rounded"></textarea>
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
