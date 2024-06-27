import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, Slider, Typography, Button } from '@mui/material';

interface FiltersProps {
    genres: string[];
    onApplyFilters: (selectedGenres: string[], ratingRange: number[], yearRange: number[]) => void;
}

const Filters: React.FC<FiltersProps> = ({ genres, onApplyFilters }) => {
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [ratingRange, setRatingRange] = useState<number[]>([0, 10]);
    const [yearRange, setYearRange] = useState<number[]>([1990, new Date().getFullYear()]);

    const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const genre = event.target.name;
        setSelectedGenres(prevGenres =>
            event.target.checked ? [...prevGenres, genre] : prevGenres.filter(g => g !== genre)
        );
    };

    const handleRatingChange = (event: Event, newValue: number | number[]) => {
        setRatingRange(newValue as number[]);
    };

    const handleYearChange = (event: Event, newValue: number | number[]) => {
        setYearRange(newValue as number[]);
    };

    const applyFilters = () => {
        onApplyFilters(selectedGenres, ratingRange, yearRange);
    };

    return (
        <div>
            <Typography variant="h5">Filters</Typography>

            <FormGroup>
                <Typography variant="subtitle1">Genres:</Typography>
                {genres.map(genre => (
                    <FormControlLabel
                        key={genre}
                        control={<Checkbox checked={selectedGenres.includes(genre)} onChange={handleGenreChange} name={genre} />}
                        label={genre}
                    />
                ))}
            </FormGroup>

            <Typography variant="subtitle1">Rating Range:</Typography>
            <Slider
                value={ratingRange}
                onChange={handleRatingChange}
                valueLabelDisplay="auto"
                min={0}
                max={10}
                step={0.5}
            />

            <Typography variant="subtitle1">Year Range:</Typography>
            <Slider
                value={yearRange}
                onChange={handleYearChange}
                valueLabelDisplay="auto"
                min={1990}
                max={new Date().getFullYear()}
                step={1}
            />

            <Button variant="contained" color="primary" onClick={applyFilters}>
                Apply Filters
            </Button>
        </div>
    );
};

export default Filters;
