import { useState } from 'react'

function ClaimText({ mainText, header}) {
  return (
    <>
        <div id='autodoprava' className='flex flex-col items-center pt-20 w-10/12 md:w-3/5 lg:w-2/5'>
            <h2 className='text-5xl my-8 uppercase text-center font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent whitespace-pre-line'>
                {header}
            </h2>
            <div className='flex text-center tracking-tight whitespace-pre-line'>
              {mainText}
            </div>
        </div>
    </>
  )
}

export default ClaimText
