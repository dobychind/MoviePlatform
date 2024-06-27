import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import { MovieDetails } from '../types';

const MovieDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieDetails | null>(null);

    useEffect(() => {
        getMovieDetails(Number(id)).then(response => setMovie(response.data.docs));
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
            {/* <img src={movie.poster.url} alt={movie.name} /> */}
            <h1>{movie.name}</h1>
            <p>{movie.description}</p>
            <p>Рейтинг в Кинопоиске: {movie.rating.kp}</p>
            <p>Дата выпуска: {movie.year}</p>
            {/* <p>Жанры: {movie.genres.map(genreName => genreName.genre).join(', ')}</p> */}
        </div>
    );
};

export default MovieDetail;
