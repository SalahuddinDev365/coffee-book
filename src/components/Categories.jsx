import React from 'react';
import { NavLink } from 'react-router-dom';

const Categories = ({ categories }) => {
    return (
        <div role="tablist" className="tabs tabs-lifted mb-10">
            {categories.map(category => 
                <NavLink key={category.category} to={`/category/${category.category}`} role="tab" 
                className={({isActive}) => `tab text-lg ${isActive ? 'tab-active font-bold'  : ''}`}>{category.category}</NavLink>
            )}         
        </div>
    );
};

export default Categories;