import ToyCard from "../../components/ToyCard/ToyCard";

const AllToys = () => {
    return (
        <div className="overflow-x-auto mt-16 mx-28">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
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
                        <ToyCard/>
                    }
                </tbody>
               
            </table>
        </div>
    );
};

export default AllToys;