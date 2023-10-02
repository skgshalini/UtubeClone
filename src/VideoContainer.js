import React, { useEffect, useState } from 'react'
import YOUTUBE_VIDEOS_API from './utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos ,setVideos]= useState(null);
    const getVideos= async () =>{
        const data= await fetch(YOUTUBE_VIDEOS_API)
        const json = await data.json();
        console.log(json.items)
        setVideos(json.items);
        
        }
useEffect(()=>{
    getVideos();
},[])
if(!videos)
return null
  return (
 
  <div className="flex flex-wrap">
    
   {videos.map(video=> (<Link className='w-1/5 m-2 p-2 shadow' to={"/watch?v="+video.id}><VideoCard key = {video.id} info={video}/></Link>))}
   
</div>

  )
}

export default VideoContainer
