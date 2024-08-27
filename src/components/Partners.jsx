import { useState } from 'react'

function Partners({ header, partnersArray }) {
  return (
    <>
        <div id='partners' className='flex flex-col items-center mt-20 w-2/5'>
            <h2 className='text-5xl my-8 uppercase text-center font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent'>
                {header}
            </h2>
            <div className='flex items-center gap-24 flex-col md:flex-row'>
              {partnersArray.map((partner, index) => (
                <div key={index} className=' w-44'>
                  <img src={partner} alt="Logo partnera" />
                </div>
              ))}
            </div>
        </div>
    </>
  )
}

export default Partners
