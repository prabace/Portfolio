import React from 'react'

export const Progress = () => {
  return (
 <div className='py-10 font-heading'>
   <div className='mb-[70px] '>
           <h2 className='text-4xl font-ham'>Skills</h2>
   </div>
  <div class="mb-1 text-lg font-medium dark:text-white">HTML</div>
  <div class="w-full w-20 mb-6 w-[90%]">
  <div class="bg-green-500 h-2 rounded-md" ></div>
</div>
<div class="mb-1 text-lg font-medium dark:text-white">CSS</div>
<div class="w-full mb-6 w-[60%]">
  <div class="bg-blue-400 h-2 rounded-md"></div>
</div>
<div class="mb-1 text-lg font-medium dark:text-white">Tailwind CSS</div>
<div class="w-full mb-6 w-[60%]">
  <div class="bg-yellow-500 h-2 rounded-md"></div>
</div>
<div class="mb-1 text-lg font-medium dark:text-white">JavaScript</div>
<div class="w-full mb-6 w-[40%]">
  <div class="bg-red-500 h-2 rounded-md"></div>
</div>
<div class="mb-1 text-lg font-medium dark:text-white">React JS</div>
<div class="w-full mb-6 w-[60%]">
  <div class="bg-cyan-800 h-2 rounded-md"></div>
</div>
</div>
  )
}
