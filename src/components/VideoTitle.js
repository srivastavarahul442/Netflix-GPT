import React from 'react'

const VideoTitle = ({overview,title}) => {
    // console.log(overview)
    // console.log(title)
  return (
    <div className='w-screen aspect-video bg-gradient-to-r from-black pt-[10%] px-12 absolute'>
        <h1 className='font-bold text-white text-xl'>{title}</h1>
        <p className=' py-1 my-5 text-sm text-white w-1/3 text-wrap'>{overview}</p>
        <div className='mt-4'>
            <button className='bg-white text-sm font-bold rounded-lg hover:bg-opacity-70 text-black h-11 w-[110px] mr-5'>Play</button>
            <button className='bg-gray-500  text-sm font-bold rounded-lg hover:bg-opacity-70 text-white h-11 w-[110px]'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle


