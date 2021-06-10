import React from 'react';
import Services from '../Services/Services';

const Home = () => {

    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div>
            <form className="flex my-10 justify-center container mx-auto px-4" action="" onSubmit={handleSubmit}>
                <input
                type="text"
                name="search"
                autoComplete="given-search"
                placeholder='Search'
                className="p-2 focus:ring-indigo-500 focus:ring-2 text-md block w-3/5 shadow-sm border-gray-300 border rounded-md focus:outline-none"
                />
                <button className="bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 px-4 rounded ml-3">
                    Search
                </button>
            </form>
            <Services />
        </div>
    );
};

export default Home;