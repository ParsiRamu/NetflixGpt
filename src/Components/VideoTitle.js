
import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=' w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div >
            <button className='px-14 p-3 bg-gray-500 text-white text-2xl bg-opacity-50 rounded-lg'>▶️ Play</button>
            <button className='bg-gray-500 text-white text-2xl px-14 p-3 m-5 bg-opacity-50 rounded-lg' >MoreInfo</button>
        </div>
      
    </div>
  )
}

export default VideoTitle
