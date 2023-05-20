import { useContext, useEffect, useState } from "react";
import MyToyRow from "../../components/MyToyRow/MyToyRow";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const { user } = useContext(AuthContext);
    //  useEffect(() => {
    //      fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
    //          .then(res => res.json())
    //          .then(data => setMyToys(data));
    //  }, [myToys])

    const handleSortChange = (event) => {
        const sortOption=event.target.value;
        fetch(`http://localhost:5000/my-toys?email=${user?.email}&sort=${sortOption}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                        }
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto mt-16 mx-28">
            <div className="mb-4">
                <label htmlFor="sort-select">Sort By:</label>
                <select id="sort-select" onChange={handleSortChange}>
                    <option value="asc" defaultChecked>Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>

            {/* <div className="text-center flex gap-3 justify-center mb-7">
            <button className="btn btn-outline " onClick={handleAscendingSort}>Ascending Sort</button>
            <button className="btn btn-outline ">Descending Sort</button>
        </div> */}

            <table className="table table-compact w-full">
                <thead>
                    <tr className="text-center">
                        <th></th>
                        <th>Toy Image</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Available Quantity</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToys.map((toy, indx) => {
                            return <MyToyRow key={toy._id} toy={toy} handleDelete={handleDelete} indx={indx + 1} />

                        })
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyToys;