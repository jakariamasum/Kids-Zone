import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitlte from "../../hooks/useTitle";

const Update = () => {
  const toy = useLoaderData();
  const [updateInfo, setUpdateInfo] = useState({
    price: "",
    quantity: "",
    description: "",
  });

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      ...toy,
      price,
      quantity,
      description,
    };

      fetch(`https://kids-zone-server-weld.vercel.app/toys/${toy.id}`, {
        method: 'PUT',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedToy)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
    
  };

  useTitlte('Update')
  return (
    <div className="max-w-xl mx-auto mt-16">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Do you want to update the information of {toy.toyName}?
      </h1>
      <h1 className="text-2xl font-semibold mb-10 text-center">
        Please fill-up this form
      </h1>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="w-full px-3 py-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="quantity">
              Available Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="description">
              Detail Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-xl"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
