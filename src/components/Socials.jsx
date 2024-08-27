import instasvg from '../assets/insta.svg'
import fbsvg from '../assets/fb.svg'
import ytsvg from '../assets/yt.svg'
import linkedinsvg from '../assets/linkedin.svg'

function Socials({ header, insta, instalink, fb, fblink, yt, ytlink, linkedin, linkedinlink}) {
  return (
    <>
        <div id='socials' className='flex flex-col items-center mt-20 w-2/5'>
            <h2 className='text-5xl my-8 uppercase text-center font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent'>
                {header}
            </h2>
            <div className='flex items-center gap-4'>
              {insta && 
              <div className='w-24 transition-all duration-150 cursor-pointer hover:scale-110'>
                <a href={instalink} target="_blank" rel="noopener noreferrer">
                  <img src={instasvg} alt="Instagram" />
                </a>
              </div>
              }
              {fb && 
              <div className='w-24 transition-all duration-150 cursor-pointer hover:scale-110'>
                <a href={fblink} target="_blank" rel="noopener noreferrer">
                  <img src={fbsvg} alt="Facebook" />
                </a>
              </div>
              }
              {yt && 
              <div className='w-24 transition-all duration-150 cursor-pointer hover:scale-110'>
                <a href={ytlink} target="_blank" rel="noopener noreferrer">
                  <img src={ytsvg} alt="Youtube" />
                </a>
              </div>
              }
              {linkedin && 
              <div className='w-24 transition-all duration-150 cursor-pointer hover:scale-110'>
                <a href={linkedinlink} target="_blank" rel="noopener noreferrer">
                < img src={linkedinsvg} alt="Linkedin" />
                </a>
              </div>
              }
            </div>
        </div>
    </>
  )
}

export default Socials
