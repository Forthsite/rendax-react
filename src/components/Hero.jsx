
function Header({ maintext, subtext, bg, logo }) {

  return (
    <>
    <div className='relative h-screen w-full flex justify-center bg-cover group bg-center' style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute h-2/3 inset-0 bg-gradient-to-t from-primary/65 to-primary/0 z-10 mt-auto bottom-0 transition-all duration-1000 group-hover:h-1/2"></div>
        <div className='flex relative w-11/12 sm:w-auto h-full justify-center items-center z-20 flex-col'>
            <div className='flex flex-col items-center w-full'>
                <h1 className='w-full text-5xl text-center text-white font-normal py-6 sm:px-24 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 mt-auto uppercase'>
                  <img src={logo} alt="" />
                </h1>
                <h3 className='text-slate-100 font-bold text-base mt-4 text-center' style={{ textShadow: '2px 1px 1px #000000' }}>{subtext}</h3>
            </div>
        </div>
        <a href="#onas" className="absolute bottom-0 inset-0 flex justify-center self-end text-white font-thin text-center mb-8 uppercase cursor-pointer transition-all hover:-translate-y-1 z-20">
          <span id='onas' className=''>Zjistit více<br />↓</span>
        </a>
    </div>
    </>
  )
}

export default Header
