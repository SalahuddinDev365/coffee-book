import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import sortBy from 'sort-by';

const Coffees = () => {
    const data = useLoaderData();

    const [coffees, setCoffees] = useState(data);

    const handleSort = sortBy => {
        if(sortBy === 'popularity') {
            // sort by popularity usign dsc
            const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
            setCoffees(sorted);
        }
        else if(sortBy === 'rating') {
            // sort by rating using asc
            const sorted = [...data].sort((a, b) =>  a.rating - b.rating)
            setCoffees(sorted);
        }
    }

    return (
        <>
        <div className='flex justify-between items-center pb-8 text-2xl text-gray-500'> 
            <div>Sort Coffee's by Popularity & Rating-&gt; </div>
            <div className='flex gap-3'>
                <div onClick={() => handleSort('popularity')} className='btn btn-warning'>Sort By Popularity</div>
                <div onClick={() => handleSort('rating')} className='btn btn-warning'>Sort By Rating</div>
            </div>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
            }
        </div>
        </>
    );
};

export default Coffees;