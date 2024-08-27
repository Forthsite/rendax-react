import HamburgerDrawer from "react-hamburger-drawer";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header({ logo, liItems }) {

    
  return (
    <>
        <header className="flex px-4 md:px-20 items-center justify-between fixed z-50 top-0 h-24 w-full shadow-2xl bg-white gap-8">
            <Link to={'/'}>
            <div className="max-w-72 sm:w-80">
                <img loading="lazy" id="logo" alt="Logo" src={logo} />
            </div>
            </Link>
            <div>
                <div className="flex gap-4 sm:gap-8 font-light uppercase text-2xl text-[#0f121b] cursor-pointer items-center">
                    <div className="hidden lg:flex gap-8  items-center">
                        {liItems.map((item, index) => (
                            <nav key={index} className="w-min xl:w-full text-nowrap after:block after:border-b after:border-red-500 after:scale-0 after:transition-all hover:after:scale-100"><HashLink to={item.href}> {item.text} </HashLink></nav>
                        ))}
                    </div>
                    <button className='hidden xl:flex w-full bg-gradient-to-r from-secondary to-primary py-2 px-4 rounded-xl my-8 font-normal transition-all duration-300 hover:scale-105'><a href="tel:+420735063733">POPTEJTE NÁS</a></button>
                    {/* NAVBAR SOCIALS LINKS */}
                    {/* <li className="flex w-8 transition-all hover:opacity-50"><a href="" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" className="ionicon" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" fill="#0f121b"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" fill="#0f121b"></path></svg></a></li>
                    <li className="flex w-8 transition-all hover:opacity-50"><a href="" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="2rem" className="ionicon" viewBox="0 0 512 512"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"></path></svg></a></li>
                    <li className="flex w-8 transition-all hover:opacity-50"><a href="tel:"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" width="2rem" viewBox="0 0 512 512"><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path></svg></a></li>
                    <li className="flex w-8 transition-all hover:opacity-50"><a href="mailto:"><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" width="2rem" viewBox="0 0 512 512"><rect x="48" y="96" width="416" height="320" rx="40" ry="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></rect><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 160l144 112 144-112"></path></svg></a></li> */}
                </div>
                <div className="flex lg:hidden w-8 h-8 mr-4">
                    <HamburgerDrawer > 
                        <div className="flex flex-col gap-1 ml-3">
                        {liItems.map((item, index) => (
                                <nav key={index} className="w-2/3 font-light uppercase text-2xl after:block after:border-b after:bg-red-500 after:scale-0 after:transition-all hover:after:scale-100"><a href={item.href}>{item.text}</a></nav>
                            ))}
                        <button className='w-1/3 bg-gradient-to-r from-secondary to-primary py-2 px-4 rounded-xl my-8 font-normal transition-all duration-300 hover:scale-105'><a href="tel:+420735063733">POPTEJTE NÁS</a></button>
                        </div>
                    </HamburgerDrawer>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
