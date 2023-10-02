import React, { useEffect,useState } from 'react'
import { toggleMenu } from './utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from './utils/constants'
import { cacheResults } from './utils/searchSlice'

const Head = () => {
  const [searchQuery,setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector(store =>store.search)
  const dispatch = useDispatch();
  useEffect( ()=>{
const timer = setTimeout(() => {
  if(searchCache[searchQuery]){
    setSuggestions(searchCache[searchQuery]) 
  }
  else{
  getSearchSuggestions()
  } 
},200 )
return ()=>{
  clearTimeout(timer)
};

  },[searchQuery])

  const getSearchSuggestions = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
      const json = await data.json();
     console.log(json[1])
   setSuggestions(json[1]) 
    dispatch(cacheResults({[searchQuery]:json[1]}))
  }
   
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
  return (
    <>
   <div className="grid grid-flow-col p-2  m-2 shadow">
      <div className = "flex col-span-1"><img onClick={()=>toggleMenuHandler()}
      className="h-10 p-2 cursor-pointer" alt="hamburgericon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"/>
      <img className="h-10" alt="youtubeicon" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/></div>

      <div className="col-span-10 flex justify-center ">
      
        <input placeholder="Search" className = "w-1/2  rounded-l-full border px-4"  type='text' value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value)}}  onFocus={()=>setShowSuggestions(true)} onBlur={()=>setShowSuggestions(false)}/>
        <button className="border rounded-r-full    px-5 py-2 bg-gray-200">
        🔍</button>
 
      </div>
     
    <div className="col-span-1 flex justify-end">
        <img className="h-10 px-2 " alt="usericon" src="https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png"/>
    
    </div>
    </div>
  {showSuggestions &&  <div className="grid grid-flow-col">
    <div className = " col-span-1 "></div>
    <div className = " col-span-10 flex justify-center">
  <div className = " w-[32rem] bg-white absolute rounded shadow  px-[1rem]">
    <ul>
      {suggestions.map(s=> <li key={s} className='p-1 border-t'>🔍 {s}</li>)}
      
    </ul>
    </div>
    </div>
    
    <div className = " col-span-1"></div>

    </div>
    
  }
   
    </>

  )
}

export default Head
