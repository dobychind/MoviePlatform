export interface Movie {
    id: number;
    name: string;
    poster: {
        url: string;
    };
    year: number;
    rating: {
        kp: number;
    };
}

export interface MovieDetails extends Movie {
    description: string;
    genres: {
        genre: string
    }[];    
}

console.log()
