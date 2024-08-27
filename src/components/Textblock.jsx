import { useState } from 'react'

function Textblock({ mainText, header}) {
  return (
    <>
        <div id='lakovna' className='flex flex-col items-center mt-20 w-10/12 md:w-3/5 lg:w-2/5'>
            <h2 className='text-5xl my-8 uppercase text-center font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent whitespace-pre-line'>
                {header}
            </h2>
            <div className='flex text-center tracking-tight'>
              {mainText}
            </div>
            <div>
                <button className='bg-gradient-to-r from-secondary to-primary py-2 px-4 rounded-xl my-8 font-semibold transition-all duration-300 hover:scale-105'><a href="tel:+420735063733">René Papoušek - 735 063 733</a></button>
            </div>
        </div>
    </>
  )
}

export default Textblock
