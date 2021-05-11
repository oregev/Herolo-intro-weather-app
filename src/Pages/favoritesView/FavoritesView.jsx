import React from 'react';
import { useSelector } from 'react-redux';
import { SingleCity } from "./SingleCity";

export const FavoritesView = () => {
    const favorites = useSelector(state => state.favoritesData);

    return (
        <div className="favorites">
            <header className="favorites--header">
                <h2>Favorites</h2>
            </header>
            {favorites.length === 0 && <p>Go get yourself some favorite locations...</p>}
            <div className="favorites--body">
                { favorites.map((city) => <SingleCity key={city.city.Key} data={city}/> )}
            </div>
        </div>
    );
};
