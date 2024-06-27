import axios from 'axios';

const API_KEY = "ATYDEFE-DCV46Q9-H247CB0-DB8HYVD";
const BASE_URL = 'https://api.kinopoisk.dev/v1.4';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'X-API-KEY': API_KEY,
    },
});

export const getMovies = (page: number = 1) =>
    api.get(`/movie?${page}&limit=50&slug=top250`);

console.log(getMovies(1))

export const getMovieDetails = (id: number) =>
    api.get(`/films/${id}`);
