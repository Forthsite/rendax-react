import { useState } from 'react'

function Card({text, svg, svgSize}) {

  return (
    <>
        <div className='flex flex-col items-center justify-between gap-4'>
            <div className='w-24 self-center my-auto' style={{width: `${svgSize}rem`}}>
                <img src={svg} alt={text} />
            </div>
            <span className='text-2xl text-slate-700 text-center'>{text}</span>
        </div>
    </>
  )
}

export default Card
