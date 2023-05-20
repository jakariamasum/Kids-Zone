import React from 'react';

const SubCategoryCard = ({ toy }) => {
    const { picture, toyName, rating, price, quantity } = toy;
    return (
        <div className="flex justify-center">
            <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt={toyName} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{toyName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SubCategoryCard;