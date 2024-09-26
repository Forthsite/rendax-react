import Header from './components/Header'
import Hero from './components/Hero'
import CardGrid from './components/CardGrid'
import Card from './components/Card'
import ClaimText from './components/ClaimText'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import logo from './assets/rendax_logo.png'
import logowhite from './assets/rendax_logo_transparent.png'
import Partners from './components/Partners'
import Socials from './components/Socials'
import Textblock from "./components/Textblock";

import g1 from './assets/gallery/1.jpeg'
import g2 from './assets/gallery/5.jpeg'
import g3 from './assets/gallery/rendax insta (4).jpg'
import g4 from './assets/gallery/rendax insta (7).jpg'
import g5 from './assets/gallery/rendax insta (2).jpg'
import g6 from './assets/gallery/2.jpeg'
import g7 from './assets/gallery/3.jpeg'
import g8 from './assets/gallery/4.jpeg'

import p1 from './assets/stavebniny_malik.svg';
import p2 from './assets/lakovnalogo.png';
import p3 from './assets/logo_hrbata.svg'

import herobg from './assets/rendax_hero.jpeg'
import mapimg from './assets/map_color.jpg'
import "vanilla-cookieconsent/dist/cookieconsent.css";
import useCookieConsent from "./hooks/useCookieConsent";
import Blog from './components/Blog'
import bggraphics from './assets/bg_graphics.svg'


function App() {
  useCookieConsent();

  const navbar = [
    {text: 'O nás', href: './#onas'},
    {text: 'Autodoprava', href: './#lakovna'},
    {text: 'Galerie', href: './#galerie'},
    {text: 'Blog', href: './#blog'},
    {text: 'Kontakt', href: './#kontakt'}
  ]
  const imgArray = [
    {img: g1, desc: ''},
    {img: g2, desc: ''},
    {img: g3, desc: ''},
    {img: g4, desc: ''},
    {img: g5, desc: ''},
    {img: g6, desc: ''},
    {img: g7, desc: ''},
    {img: g8, desc: ''},
  ]
  const partners = [ p1, p2, p3 ]
  const mainText = `Poskytujeme profesionální dopravu jak pro firmy, tak i pro fyzické osoby. Nakládku a vykládku zajistí hydraulická ruka, která je součástí našeho přepravního vozu. Neváhejte naši firmu kontaktovat a starosti s přepravou vašich těžkých nákladů nechejte na nás, o vše se rádi postaráme.`
  const maplink = "https://www.google.com/maps/place/49%C2%B030'00.9%22N+16%C2%B039'47.3%22E/@49.5002649,16.6605537,17z/data=!3m1!4b1!4m4!3m3!8m2!3d49.5002614!4d16.6631286?entry=ttu"

  return (
    <div className='flex flex-col justify-center items-center bg-slate-50' style={{backgroundImage: `url(${bggraphics})`}}>
      <Header liItems={navbar} logo={logo} />
      <Hero logo={logowhite} subtext={'Poskytujeme profesionální dopravu jak pro firmy, tak i pro fyzické osoby.'} bg={herobg} />
      <CardGrid Card={Card}/>
      <ClaimText mainText={mainText} header={'Vítejte na našich stránkách!'}/> 
      <Gallery imgArray={imgArray}/>
      <Partners header={'Partneři'} partnersArray={partners} />
      <Textblock header={'Nezávazná poptávka'} mainText={'Zde můžete napřímo kontaktovat pana majitele:'} />
      <Blog />
      <Socials header={'Sledujte nás'} insta={true} instalink={'https://www.instagram.com/rendax_s.r.o/'} fb={true} fblink={'https://www.facebook.com/rendaxsro'}/>
      <Contact mapimg={mapimg} maplink={maplink} address={'Havlíčkova 1598/63\n680 01 Boskovice'} tel={'+420 735 063 733'} email={'papousek@rendaxsro.cz\nfakturace@rendaxsro.cz'} ic={'14028727'} dic={'CZ14028727'}/>
      <Footer />
    </div>
  )
}

export default App
