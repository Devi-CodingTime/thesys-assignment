import React from 'react'

function MenuItem({gallery,listContent,count,src}) {
  return (
    <div className='w-60 h-10 flex justify-between items-center'>
      <div className='flex gap-4'>
        <img src={src} alt={gallery} width="20px" style={{height:"50%"}}/>
        <p>{listContent}</p>
      </div>
      <p className='bg-gray-400 w-8 h-5 rounded-full text-white flex justify-center items-center p-[6px]'>{count}</p>

    </div>
  )
}

export default MenuItem
