import { useState } from 'react'
import Credit from './Credit'

function Footer({}) {
  const [count, setCount] = useState(0)

  return (
    <>
    <footer className='flex justify-center sm:justify-end w-full bg-slate-900 text-slate-50 py-8'>
        <div>
            <Credit />
        </div>
    </footer>
    </>
  )
}

export default Footer
