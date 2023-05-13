import React from 'react'

export const Contact = () => {
  return (
    <div className='w-[100%] h-screen fixed text-white bg-black'>
        <div className='pt-40 px-60'>
            <h1 className='text-4xl font-ham'>CONTACT</h1>
            <hr className='my-6'/>

            <div className='grid grid-cols-4'>
        <div>
            <h2  className='text-2xl font-extralight font-heading'>E-MAIL</h2>
        </div>
        <div className='-ml-60 font-heading text-2xl'>
           pokharel.prabesh00@gmail.com
        </div>
        <div className='grid grid-rows-3'>
            <h2  className='text-2xl font-extralight font-heading'>SOCIAL MEDIAS</h2>
        </div>
        <div className='-ml-40'>
            <ul className='font-heading text-2xl'>
                <li>LinkedIn</li>
                <li>Github</li>
                <li>Instagram</li>
            </ul>
        </div>
       </div>
        </div>
      
    </div>
  )
}
