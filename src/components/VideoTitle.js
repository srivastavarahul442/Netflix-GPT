import React from 'react'

const VideoTitle = ({overview,title}) => {
    // console.log(overview)
    // console.log(title)
  return (
    <div className='pt-36 px-12'>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className=' py-4 text-sm w-1/3 text-wrap'>{overview}</p>
        <div>
            <button className='bg-green-700 rounded-lg bg-opacity-70 text-white h-8 w-[90px] mr-3'>Play</button>
            <button className='bg-gray-600 rounded-lg bg-opacity-50 text-white h-8 w-[90px]'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle


