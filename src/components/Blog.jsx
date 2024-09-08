/* eslint-disable react/prop-types */
import Blogpost from './Blogpost';
import { articles } from '../articles';
import { Link } from 'react-router-dom';
import Articlepage from '../views/Articlepage';

function Blog({}) {

  return (
    <>
    <h2 id='blog' className='text-5xl pt-24 my-8 uppercase text-center font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent whitespace-pre-line'>
        Blog
    </h2>
    <div className='flex flex-col gap-8 w-3/4 justify-center'>
        {articles.map(article => (
            <Link > 
             {/* to={`/blog/${article.url}`}>  */}
              <Blogpost key={article.id} title={article.title} img={article.mainimg} content={article.content[0].paragraph} date={article.date} />
            </Link>
        ))}
    </div>
    </>
  )
}

export default Blog;
