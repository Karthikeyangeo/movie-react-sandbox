import { Counter } from "./Counter";

export function Movie({ name, pic, rating, genre, runningTime, summary }) {
  return (
    <div className="movie-container">
      <img className="moviepic" alt="Movie poster" src={pic} />
      <h1 className="movie-name">{name}</h1>
      <h5>IMDB Rating: {rating}</h5>
      <h5>Genre:{genre}</h5>
      <h5>Running Time : {runningTime}</h5>
      <p className="movie-specs">{summary}</p>
      <Counter />
    </div>
  );
}
