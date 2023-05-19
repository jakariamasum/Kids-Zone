import MyToyRow from "../../components/MyToyRow/MyToyRow";

const MyToys = () => {
    return (
        <div className="overflow-x-auto mt-16 mx-28">
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
                        <MyToyRow/>
                    }
                </tbody>
               
            </table>
        </div>
    );
};

export default MyToys;