import  { useState } from 'react'

const Movies = ({ movies }) => {

  const [movieName, setMovieName] = useState("");

  const filteredMovies = movies.filter((movie)=> {
    return  (
      movie.title.toLowerCase().includes(movieName.toLowerCase()) 
      );
  })
  console.log(filteredMovies);
  return (
    <div className='main_section'>
          <div>
            <input type="text" placeholder='Movie Name' value={movieName} onChange={(e)=> setMovieName(e.target.value)} />
          </div>
         <div className='movie'>
          <div className='movie_content'>
        {filteredMovies.map(movie => (
          <a href={movie.homepage} target='_blank' >
          <div key={movie.id} className='single_movie'>
            <div className="movie_inside">
            <img 
            src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`} 
            alt="Image" 
            className='movie_img'
            />
            <div className='movie_text'>
              <h2 className='movie_title'>{movie.title}</h2>
            <h4 className='movie_name'>{movie.genres[0] + " " + movie.genres[1]}</h4>
            <p>{movie.release_date}</p>
            </div>
            </div>
          </div>
        </a>
        ))}
        </div>
    </div>
    </div>
  )
}

export default Movies