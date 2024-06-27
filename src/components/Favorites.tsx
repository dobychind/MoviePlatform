import React from 'react';
import { Typography } from '@mui/material';

const Favorites: React.FC = () => {
    const favorites: string[] = []; // здесь должен быть ваш код для загрузки и отображения избранных фильмов

    return (
        <div>
            <Typography variant="h5">Favorite Movies</Typography>
            {favorites.length === 0 ? (
                <Typography>No favorite movies yet.</Typography>
            ) : (
                <ul>
                    {favorites.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
