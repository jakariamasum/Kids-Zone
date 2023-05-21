import { useEffect, useState } from "react";
import ToyCard from "../../components/ToyCard/ToyCard";

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/toys?limit=20')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    
    return (
        <div className="overflow-x-auto mt-16 mx-28">
            <table className="table table-compact w-full">
                <thead>
                    <tr className="text-center">
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, indx) => {
                            return <ToyCard key={toy._id} toy={toy} indx={indx + 1}></ToyCard>
                        })
                    }
                </tbody>

            </table>
        </div>
    );
};

export default AllToys;