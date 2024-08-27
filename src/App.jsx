import Header from './components/Header'
import Hero from './components/Hero'
import CardGrid from './components/CardGrid'
import Card from './components/Card'
import ClaimText from './components/ClaimText'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import logo from './assets/lakovnalogo.png'
import logowhite from './assets/test.png'
import Partners from './components/Partners'
import Socials from './components/Socials'
import Textblock from "./components/Textblock";

import g1 from './assets/gallery/1.jpeg'
import g2 from './assets/gallery/2.jpeg'
import g3 from './assets/gallery/3.jpeg'
import g4 from './assets/gallery/4.jpeg'
import g5 from './assets/gallery/5.jpg'
import g6 from './assets/gallery/6.jpeg'
import g7 from './assets/gallery/7.jpeg'
import g8 from './assets/gallery/8.jpeg'

import p1 from './assets/partner1.jpeg'
import p2 from './assets/partner2.png'
import p3 from './assets/partner3.svg'
import p4 from './assets/CLLogo.svg'

import herobg from './assets/heroimg2.jpg'
import mapimg from './assets/map.png'
import "vanilla-cookieconsent/dist/cookieconsent.css";
import useCookieConsent from "./hooks/useCookieConsent";
import Blog from './components/Blog'


function App() {
  useCookieConsent();

  const navbar = [
    {text: 'O nás', href: './#onas'},
    {text: 'Lakovna', href: './#lakovna'},
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
  const partners = [ p1, p2, p3, p4 ]
  const mainText = `Jsme tým nadšených profesionálů v oblasti povrchových úprav průmyslových výrobků, autodílů, kovů a plastů. Naše lakovna je vaším spolehlivým partnerem, když jde o ochranu a zdokonalení vzhledu vašich výrobků. S naší širokou nabídkou kvalitních produktů a osobním přístupem vám pomůžeme dosáhnout nejen skvělého vzhledu, ale i dlouhodobé ochrany vašich výrobků.\n Jsme tu pro vás!`
  const maplink = "https://www.google.com/maps/place/49%C2%B030'00.9%22N+16%C2%B039'47.3%22E/@49.5002649,16.6605537,17z/data=!3m1!4b1!4m4!3m3!8m2!3d49.5002614!4d16.6631286?entry=ttu"

  return (
    <div className='flex flex-col justify-center items-center bg-slate-50'>
      <Header liItems={navbar} logo={logo} />
      <Hero logo={logowhite} subtext={'Lakovna s profesionálním přístupem k vašim zakázkám'} bg={herobg} />
      <CardGrid Card={Card}/>
      <ClaimText mainText={mainText} header={'Vítejte na našich stránkách!'}/> 
      <Gallery imgArray={imgArray}/>
      <Partners header={'Partneři'} partnersArray={partners} />
      <Textblock header={'Pro firmy'} mainText={'Zde můžete napřímo kontaktovat pana majitele:'} />
      <Blog />
      <Socials header={'Sledujte nás'} insta={true} instalink={'https://www.instagram.com/lakovnaboskovice'} fb={true} fblink={'https://www.facebook.com/lakovnaboskovice'}/>
      <Contact mapimg={mapimg} maplink={maplink} address={'Havlíčkova 1598/63\n680 01 Boskovice'} tel={'+420 703 33 00 44'} email={'info@lakovnaboskovice.cz\nfakturace@lakovnaboskovice.cz'} ic={'21176248'} dic={'CZ21176248'}/>
      <Footer />
    </div>
  )
}

export default App
