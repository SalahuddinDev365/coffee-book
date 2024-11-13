import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const Card = ({ coffee, handleRemove }) => {
    const { pathname } = useLocation();
    const { id, name, image, category, ingredients, origin, type, rating, popularity } = coffee || {}
    return (
        <div className='relative'>
            <Link to={`/coffee/${id}`} className="card card-compact bg-base-100 shadow-xl p-4 ">
                <figure>
                    <img className='rounded-2xl w-full md:h-[200px] lg:h-[250px]'
                        src={image}
                        alt={image} />
                </figure>
                <div className="pt-3">
                    <h1 className="card-title">Name: {name}</h1>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popularity: {popularity}</p>
                </div>
            </Link>

            {
                pathname === '/dashboard' && <div onClick={() => handleRemove(id)} className='absolute cursor-pointer p-3 bg-warning rounded-full -top-2 -right-2'> 
                <FaTrashAlt size={'20'}></FaTrashAlt> </div>
            }
        </div>
    );
};

export default Card;