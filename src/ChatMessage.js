import React from 'react'


const ChatMessage = ({name, message}) => {
   
  return (
    <div  className="flex items-center shadow-lg p-2 rounded-lg">
        <img className="h-8 px-2 " alt="usericon" src="https://www.nicepng.com/png/full/128-1280406_view-user-icon-png-user-circle-icon-png.png"/>

        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    
    </div>
  )
}

export default ChatMessage
