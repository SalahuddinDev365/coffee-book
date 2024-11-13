// get all coffees from local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorite');
    
    if(all){
        const favorite = JSON.parse(all)
        return favorite
    }else{
        return []
    }
}

// add a coffee to local storage
const addFavorite = coffee => {
    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.id == coffee.id)
    if (isExist) return alert('Already exist')
    favorites.push(coffee);
    localStorage.setItem('favorite', JSON.stringify(favorites))
}

// remove a coffee from local storage
const removeFavorite = id => {
    const favorites = getAllFavorites();
    const remaining = favorites.filter(coffee => coffee.id != id )
    localStorage.setItem('favorite', JSON.stringify(remaining))
}


export { addFavorite , getAllFavorites, removeFavorite}