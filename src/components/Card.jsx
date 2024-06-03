import React from 'react'

function Card() {
  return (
    <div className='w-[17rem] h-[11rem] p-[10px] flex flex-col gap-4 bg-red-200 rounded-lg border'>
      <div className='flex justify-between'>
        <p className='font-semibold'>Task</p>
        <img alt='img' src='../trash.png' width="20px" style={{height:"50%"}}/>
      </div>
      <div>
        <p className='text-left'>
        Brainstorming brings team members' diverse experience into play. 
        </p>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-3'>
            <img alt='img' src='../recycle.jpg' width="20px" height="7px"/>
            <p>2</p>
        </div>
        <div className='flex gap-3'>
            <img alt='img' src='../chat.png' width="13px" height="7px"/>
            <p>3</p>
        </div>
        <div className='flex gap-1'>
            <img alt='img' src='../user1.avif' className="rounded-full border z-30" height="25px" width="25px"/>
            <img alt='img' src='../user22.webp' className="rounded-full border z-20 ml-[-8px]" height="25px" width="25px"/>
            <img alt='img' src='../user3.webp' className="rounded-full border z-10 ml-[-10px]" height="25px" width="25px"/>

        </div>
      </div>
    </div>
  )
}

export default Card
