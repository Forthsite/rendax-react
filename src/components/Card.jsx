import { useState } from 'react'

function Card({text, svg, svgSize}) {

  return (
    <>
        <div className='flex flex-col items-center gap-4'>
            <div className='self-center'>
                {svg}
            </div>
            <span className='text-2xl text-slate-700 text-center'>{text}</span>
        </div>
    </>
  )
}

export default Card
