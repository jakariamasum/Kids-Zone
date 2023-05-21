import { useEffect, useState } from "react";
import ToyCard from "../../components/ToyCard/ToyCard";
import useTitlte from "../../hooks/useTitle";

const AllToys = () => {
    useTitlte('All toys')
    const [toys, setToys] = useState([]);
    const [filteredToys, setFilteredToys] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const limit = 20;
    useEffect(() => {
        fetch(`https://kids-zone-server-weld.vercel.app/toys?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
                setFilteredToys(data);
            });
    }, []);

    const handleSearch = event => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const filteredResults = toys.filter(toy =>
            toy.toyName.toLowerCase().includes(query)
        );

        setFilteredToys(filteredResults);
    };

    return (
        <div className="overflow-x-auto mt-16 mx-28">
            <div className="text-center flex justify-center text-success mb-5">
                <input className="border p-2"
                    type="text"
                    placeholder="Search by Toy Name"
                    onChange={handleSearch}
                />
            </div>

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
                        filteredToys.map((toy, indx) => (
                            <ToyCard key={toy._id} toy={toy} indx={indx + 1}></ToyCard>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;
