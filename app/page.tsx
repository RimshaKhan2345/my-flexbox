export default function Home(){
  return(
    <div>
      <header>
      <nav className="flex justify-center bg-purple-900 h-45 w-full place-items-center">
      <div className="flex justify-center h-10"></div>
  
        <div className="flex justify-center bg-yellow-500 h-10 w-40"></div>
        <div className="flex justify-center text-white font-extrabold bg-red-600 h-10 w-40">Header</div>
        <div className="flex justify-center bg-green-800 h-10 w-40"></div>
        </nav>
  
      <nav className="flex justify-center mt-2 h-96 bg-slate-500 gap-3">
  
      <div className="flex bg-yellow-600 h-60 w-80 mt-16"></div>
      <div className="flex bg-purple-950 h-60 w-80 mt-16"></div>
      <div className="flex bg-orange-600 h-60 w-80 mt-16"></div>
      </nav>

        <nav className="flex justify-center h-96 bg-slate-500 gap-3">
  
        <div className="flex bg-pink-800 h-60 w-96 mt-16"></div>
        <div className="flex bg-sky-800 h-60 w-96 mt-16"></div>
        </nav>
  
        <nav className="flex justify-center bg-teal-500 h-30 w-full place-items-center:">
  
        <div className="flex justify-center h-8"></div>
        
        <div className="flex justify-center bg-yellow-600 h-10 w-40"></div>
        <div className="flex justify-center text-white font-extrabold bg-red-600 h-10 w-60">Footer By Rimsha</div>
        <div className="flex justify-center bg-green-900 h-10 w-40"></div>
        </nav>
  
      </header>
    </div>
  )
  }