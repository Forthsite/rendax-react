import Header from "../components/Header"
import logo from '../assets/lakovnalogo.png'
import { ScrollRestoration, useParams } from "react-router-dom";
import { articles } from "../articles";
import Footer from "../components/Footer";

function Articlepage({}) {
  const navbar = [
    {text: 'O nás', href: '/#onas'},
    {text: 'Lakovna', href: '/#lakovna'},
    {text: 'Galerie', href: '/#galerie'},
    {text: 'Blog', href: '/#blog'},
    {text: 'Kontakt', href: '/#kontakt'}
  ]
    const { url } = useParams();
    const article = articles.find(article => article.url === url)

  return (
    <>
      <ScrollRestoration />
      <Header liItems={navbar} logo={logo} />
      <div className="w-10/12 md:w-1/3 flex flex-col pt-32 mx-auto">
        <h1 className="font-bold text-3xl py-2">{article.title}</h1>
        <div className="w-full text-slate-400 text-sm pb-2">{article.date}</div>
        <div>
            <img src={article.mainimg} alt="" />
        </div>
        <div className="py-6">
            {article.content.map((section, index) => {
              if (section.header){
                return <h2 className="font-bold py-4" key={index}>{section.header}</h2>
              }
              if (section.paragraph){
                return <p key={index}>{section.paragraph}</p>
              }
              if (section.imgs){
               return section.imgs.map((img, index) => (
                  <div key={index} className="flex py-4">
                    <img src={img} alt="" />
                  </div>
                ));
              }
            })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Articlepage
