const API_KEY = '10923b261ba94d897ac6b81148314a3f';

// export function fetchMovies() {
//   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then(
//     (response) => response.json()
//   );
// }
export async function fetchMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  return await response.json();
}
