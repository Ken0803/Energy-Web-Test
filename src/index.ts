import { Genre, Movie } from "./index.types";
import MoviesData from './db.json';

/*
# The time complexity of the `getFilteredMovies` function is O(n log n), where n is the number of movies in the database.

The `filter` method used to filter the movies has a time complexity of O(n).
The `sort` method used to sort the filtered movies by the length of there filtered array has a time complexity of O(n log n).
Finally, the code that selects a random movie if the filtered array is empty has a time complexity of O(1).

Therefore, the dominant factor in the time complexity is the `sort` method, making the overall time complexity of the function O(n log n).
*/

export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
  const allMovies : Movie[] = MoviesData.movies;
  if (genres.length === 0) return [allMovies[Math.floor(Math.random() * allMovies.length)]];

  const filteredMovies = allMovies.filter((movie) => (
    movie.genres.every(genre => genres.includes(genre as Genre))
  ));
  
  filteredMovies.sort((a, b) => b.genres.length - a.genres.length);
  
  if (filteredMovies.length === 0) return [allMovies[Math.floor(Math.random() * allMovies.length)]];
  
  return filteredMovies;
}