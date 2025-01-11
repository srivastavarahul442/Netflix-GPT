import React from 'react'
import { MOVIE_POSTER_URL } from '../utils/constent'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 mr-4 hover:scale-90'>
      <img alt='movie-poster' src={MOVIE_POSTER_URL+posterPath} />
    </div>
  )
}

export default MovieCard