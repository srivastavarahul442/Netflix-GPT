import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
    if(!movies) return
    const mainMovie = movies[0];
    // console.log(mainMovie)
    
    const {overview, original_title,id} = mainMovie;
  return (
    <div>
        <VideoTitle overview={overview} title={original_title} />
        <VideoBackground movieId = {id}/>
    </div>
  )
}

export default MainContainer