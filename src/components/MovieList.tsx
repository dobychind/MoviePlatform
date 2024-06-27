import React, { useEffect, useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import MovieCard from './MovieCard';
import { getMovies } from '../services/api';
import { Movie } from '../types';

const MovieList: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        getMovies(page).then(response => setMovies(response.data.docs));
    }, [page]);

    return (
        <>
            <Grid container spacing={3}>
                {movies.map(movie => (
                    <Grid item key={movie.id} xs={12} sm={6} md={4}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={10}
                page={page}
                onChange={(_, value) => setPage(value)}
            />
        </>
    );
};

export default MovieList;
