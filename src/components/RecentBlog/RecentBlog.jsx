import { FaRegBookmark } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';

const RecentBlog = () => {
    return (
        <div className='my-20 mx-2 lg:mx-32'>
            <h1 className="text-center font-bold text-3xl mb-10">Recent Blog in Our Play Blog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
                <div className="card card-compact w-full sm:w-96 bg-base-100 border-2 border-[#D3D3D3] shadow-xl">
                    <figure><img src="https://i.ibb.co/d7pDZ9X/happy-children-jumping-summer-meadow-74855-5852.jpg" alt="Kids playing" className='p-2' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">15 Book Suggestions for Children's Summer Reading Lists</h2>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p>12-05-2023</p>
                                <p>5 min read</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-primary">Read Now<AiFillEye className='ml-2' /> </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full sm:w-96 bg-base-100 border-2 border-[#D3D3D3] shadow-xl">
                    <figure><img src="https://i.ibb.co/d7pDZ9X/happy-children-jumping-summer-meadow-74855-5852.jpg" alt="Kids playing" className='p-2' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Kids mental health improve by plaing</h2>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p>02-01-2023</p>
                                <p>10 min read</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-primary">Read Now<AiFillEye className='ml-2' /> </button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-full sm:w-96 bg-base-100 border-2 border-[#D3D3D3] shadow-xl">
                    <figure><img src="https://i.ibb.co/d7pDZ9X/happy-children-jumping-summer-meadow-74855-5852.jpg" alt="Kids playing" className='p-2' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Importance of playing outdoor</h2>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p>22-04-2023</p>
                                <p>7 min read</p>
                            </div>
                            <FaRegBookmark />
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-primary">Read Now<AiFillEye className='ml-2' /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;