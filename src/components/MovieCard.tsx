import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Movie } from '../types';

const handleClick = (movie: Movie) => {
    console.log(movie.poster.url);
};

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => (
    
    <Card>
        
        {/* <CardMedia
            component="img"
            image={movie.poster.url}
            alt={movie.name}
        /> */}
        {/* <p>{movie.poster.url}</p> */}
        <CardContent>
            <Typography variant="h5">
                <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
            </Typography>
            <Typography>{movie.year}</Typography>
            <Typography>{movie.rating.kp}</Typography>
        </CardContent>
    </Card>
);

export default MovieCard;
