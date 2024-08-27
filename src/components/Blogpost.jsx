function Blogpost({title, img, content, date}) {

  return (
    <>
    <div className="w-full h-full flex flex-col md:flex-row gap-8 shadow-xl hover:cursor-pointer group transition-all duration-300 hover:bg-slate-100">
        <div className='w-full rounded-t-xl md:w-64 md:rounded-l-xl overflow-hidden'>
            <img src={img} className='w-full h-full object-cover' />
        </div>
        <div className="flex flex-col w-full p-2 group">
            <div className="w-full py-2 font-semibold text-xl">{title}</div>
            <div className="w-full text-slate-400 text-sm">{date}</div>
            <div className=" py-1 line-clamp-3">{content}</div>
        </div>
    </div>
    </>
  )
}

export default Blogpost;
