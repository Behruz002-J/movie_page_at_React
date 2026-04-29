export default function MovieType({ movies }) {
  console.log(movies, "Salom");

  return (
    <div className="append">
      {movies?.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
              alt={movie.title}
            />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <span className="orange">{movie.vote_average}</span>
            </div>
            <span className="date">{movie.release_date}</span>
          </div>
        );
      })}
    </div>
  );
}
