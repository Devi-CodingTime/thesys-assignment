import React from 'react'

function Input() {
  return (
    // <div>
      
    //   <input type=''/>
    // </div>

    <form className="flex items-center w-[18rem] p-4 mx-auto">
  
  <div className="relative w-full">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
    </svg>
    </div>
    <input
      type="text"
      id="simple-search"
      className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
      placeholder="Search Tasks"
      required=""
    />
  </div>
</form>

  )
}

export default Input
