import React from 'react';

const Service = ({ service={} }) => {

    const { title, photo, price, subtitle, author } = service;

    return (
        <div className="shadow-xl rounded-lg">
            <img className="rounded-t-lg" src={photo} alt="" />
            <div className="p-3">
                <h1 className="text-blue-500 text-2xl font-semibold">{title}</h1>
                <h2 className="my-1 text-xl font-semibold">{author}</h2>
                <h2 className="my-1">{subtitle}</h2>
                <h3 className="">Price: <span className="text-blue-500 text-lg">{price}$</span></h3>
                <button className="bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white px-3 py-2 mt-2 rounded focus:outline-none">Enroll Now</button>
            </div>
        </div>
    );
};

export default Service;