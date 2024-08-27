function Contact( {mapimg, maplink, address, tel, email, ic, dic } ) {

    return (
      <>
      <h2 id='kontakt' className='text-5xl my-8 scroll mt-20 uppercase font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent'>
          Kontakt
      </h2>
      <div className='flex flex-col-reverse lg:flex-row w-11/12 sm:w-2/3 gap-16 justify-between items-center mb-20'>
          <div className='flex'>
              <a href={maplink} target="_blank" rel="noopener noreferrer">
              <img src={mapimg} alt="Mapa" className='rounded-lg drop-shadow-2xl cursor-pointer'/>
              </a>
          </div>
          <div className='flex flex-col items-start gap-4 w-full'>
              <div className='flex justify-center lg:justify-start items-center gap-4 w-full'>
                  <div className='w-16 text-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                  </div>
                  <pre className='flex tracking-widest'>
                      {address}
                  </pre>
              </div>
              <div className='flex justify-center lg:justify-start items-center gap-4 w-full'>
                  <div className='w-16 text-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
                  </div>
                  <pre className='flex tracking-widest'>
                      {tel}
                  </pre>
              </div>
              <div className='flex justify-center lg:justify-start items-center gap-1 sm:gap-4 w-full'>
                  <div className='w-16 text-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"/></svg>
                  </div>
                  <pre className='flex tracking-widest'>
                      {email}
                  </pre>
              </div>
              <div className='flex justify-center lg:justify-start items-center gap-4 w-full'>
                  <div className='w-16 text-primary'>
                      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M368 415.86V72a24.07 24.07 0 00-24-24H72a24.07 24.07 0 00-24 24v352a40.12 40.12 0 0040 40h328" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path d="M416 464h0a48 48 0 01-48-48V128h72a24 24 0 0124 24v264a48 48 0 01-48 48z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192"/><path d="M176 208h-64a16 16 0 01-16-16v-64a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16z" fill="currentColor"/></svg> 
                  </div>
                  <pre className='flex tracking-widest'>
                      IČ: {ic}<br />
                      DIČ: {dic}
                  </pre>
              </div>
          </div>
      </div>
      </>
    )
  }
  
  export default Contact
  