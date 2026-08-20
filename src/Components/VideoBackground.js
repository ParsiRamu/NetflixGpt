
import React from 'react'

import {  useSelector } from 'react-redux'

import useMovieTrailor from '../hooks/useMovieTrailor'

const VideoBackground = ({movieId}) => {
   
    const trailorVideo = useSelector((store) => store.movies?.TrailorVideo);
    
   useMovieTrailor(movieId)
   
   
    
  return (
    <div className="w-screen h-screen overflow-hidden">
      <iframe
        className="w-screen h-screen"
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" + trailorVideo?.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground
