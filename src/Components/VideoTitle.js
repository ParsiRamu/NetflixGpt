
import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%]  px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="px-14 p-3 bg-white text-black text-2xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white text-2xl px-14 p-3 m-5 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          MoreInfo
        </button>
      </div>
    </div>
  );
}

export default VideoTitle
