import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFavorites, removeFavorite } from '../utility';
import Card from '../components/Card';


const Dashboard = () => {
    
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const favorites = getAllFavorites();
        setCoffees(favorites)
    }, [])

    const handleRemove = (id) => {
        removeFavorite(id)
        const favorites = getAllFavorites();
        setCoffees(favorites)
    }
    return (
        <>
            <Heading title={'Welcome to Dashboard'}
                subtitle={'Managed coffees that you have previously added as favorite. you can view and remove them'}></Heading>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Dashboard;