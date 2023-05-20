import { useContext, useEffect, useState } from "react";
import MyToyRow from "../../components/MyToyRow/MyToyRow";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
    const [myToys,setMyToys]=useState([]);
    const {user}=useContext(AuthContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyToys(data));
    },[myToys])
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
                        myToys.map((toy,indx)=>{
                          return  <MyToyRow key={toy._id} toy={toy} indx={indx+1}/>

                        })
                    }
                </tbody>
               
            </table>
        </div>
    );
};

export default MyToys;