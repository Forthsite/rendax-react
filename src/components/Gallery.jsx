import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function Gallery({ imgArray }) {
    const [preview, setpreview] = useState('none');
    const [previewSrc, setPreviewSrc] = useState('');

    function handleClick(e) {
        const src = e.target.src
        if (preview === 'none'){
            setpreview('block')
            setPreviewSrc(src)
        }
        else{
            setpreview('none')
        }
    }

  return (
    <>      
    <h2 id='galerie' className='text-5xl pt-32 mb-12 uppercase font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent'>
        Galerie
    </h2>
        <div className="resize grid self-center grid-rows-2 grid-cols-2 xl:grid-cols-4 mx-[15%]">
            {imgArray.map(item => (
                <div key={uuidv4()} className="cursor-pointer relative transition-all duration-1000 group w-[33vw] h-[33vw] xl:w-[15.25vw] xl:h-[15.25vw]"> 
                    <img onClick={handleClick} src={item.img} alt={item.desc} className="object-cover transition-all duration-300 group-hover:brightness-50 w-[33vw] h-[33vw] xl:w-[15.25vw] xl:h-[15.25vw]"/>
                    <span className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-slate-100 text-3xl transition-all duration-300 opacity-0 group-hover:opacity-100">{item.desc}</span>
                </div>
            ))}
        </div>
        <div className="fixed top-0 left-0 bg-black/90 h-full w-full z-50" style={{display: `${preview}`}}>
            <div className="flex flex-col gap-4 w-full h-full xl:flex-row-reverse justify-center items-center">
                <span onClick={handleClick} className="relative self-end xl:self-start mt-[5%] text-7xl font-extrabold text-white cursor-pointer z-50 transition-all duration-1000 hover:text-primary">&times;</span>
                <img className="relative  object-cover max-w-[95%] max-h-[75%]" src={previewSrc} alt="Přiblížený obrázek" />
            </div>
        </div>
    </>
  )
}

export default Gallery
