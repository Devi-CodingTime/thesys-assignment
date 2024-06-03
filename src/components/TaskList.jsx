import React from 'react'

function TaskList({task,count}) {
  return (
    <div className='flex justify-between items-center min-w-32 max-w-36'>
      <p className='font-semibold text-left'>{task}</p>
      <p className='bg-gray-400 w-5 h-5 rounded-full text-white flex justify-center items-center'>{count}</p>
    </div>
  )
}

export default TaskList
