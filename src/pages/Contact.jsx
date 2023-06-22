import React from 'react'

export const Contact = () => {
  return (
    <div className='w-[100%] h-screen flex fixed text-white bg-black'>
        <div className='w-[100%] mobile:py-40 mobile:px-10 tablet:py-40 laptop:py-40 laptop:px-60 desktop:py-40 desktop:px-60'>
            <h1 className='text-4xl font-ham'>CONTACT</h1>
            <hr className='my-6'/>

            <div className='grid mobile:grid-cols-2 tablet:grid-cols-2 gap-y-10 desktop:grid-cols-4'>
        <div>
            <h2  className='mobile:text-xl tablet:text-2xl font-extralight font-heading'>E-MAIL</h2>
        </div>
        <div className= 'font-heading  mobile:text-[20px] tablet:text-2xl'>
           pokharel.prabesh00@gmail.com
        </div>
        <div className='grid grid-rows-3'>
            <h2  className='desktop:ml-20 mobile:text-xl tablet:text-2xl font-extralight font-heading'>SOCIAL MEDIAS</h2>
        </div>
        <div className=''>
            <ul className='font-heading  mobile:text-[20px] tablet:text-2xl'>
                <a href="https://www.linkedin.com/in/prabesh-pokharel-4b2735257/"><li>LinkedIn</li></a>
                <a href='https://github.com/prabace/'><li>Github</li></a>
                <li>Instagram</li>
            </ul>
        </div>
       </div>
        </div>
      
    </div>
  )
}
