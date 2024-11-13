import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addFavorite, getAllFavorites } from '../utility';

const CoffeeDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const { id } = useParams();
    const [coffee, setCoffee] = useState({});
    const [isFavorite, setIsFavorite] = useState(false)
    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id);
        console.log(singleData)
        setCoffee(singleData);
        const favorites = getAllFavorites();
        const isExist = favorites.find(item => item.id == singleData.id);
        if (isExist) {
            setIsFavorite(true)
        }
    }, [data, id])

    const handleFavorite = (coffee) => {
        addFavorite(coffee);
        setIsFavorite(true)
    }
    return (
        <div>
            <div>
                <p className='text-5xl'>{coffee.description}</p>
                <img className='object-cover w-full h-[500px] rounded-2xl' src={coffee.image} alt="" />
                <div className='flex justify-between items-center'>
                    <div className='text-2xl'>{coffee.name}</div>
                    <div><button disabled={isFavorite} onClick={() => handleFavorite(coffee)} className='btn btn-warning'>Add Favorite</button></div>
                </div>
                <p>Popularity: {coffee.popularity}</p>
                <p>Rating: {coffee.rating}</p>
                <p>Making Process </p>
                <span>{coffee.making_process}</span>

                <div className='flex justify-between'>
                    <div>
                        <div>
                            <h3 className="mt-4 mb-2">Ingredients:</h3>

                            {
                                coffee.ingredients && coffee.ingredients.length > 0 ?
                                    coffee.ingredients.map((item, index) => <li key={index}>{item}</li>) :
                                    <li>No Ingredients Available</li>
                            }
                        </div>
                        <div>
                            <h3 className="mt-4 mb-2">Nutrition</h3>

                            {
                                coffee.nutrition_info ? Object.keys(coffee.nutrition_info).map((key, index) =>
                                    <li key={index}>{key}: {coffee.nutrition_info[key]}</li>) :
                                    <li>No Nutrition Available</li>
                            }

                        </div>
                    </div>
                    <div>Image</div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;