import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/chatSlice';
import { generateRandomName, generateRandomText } from './helper';

const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages)
  const dispatch = useDispatch();
  useEffect(()=>{
   const i = setInterval(()=>{
      dispatch(addMessage({
          name:generateRandomName(),
          message:generateRandomText(21)+ " 🚀",
      }))

    },2000)   
   return ()=>{
  clearInterval(i);
   }

  },[])
  return (
    <div className=" h-[400px] mx-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
   { chatMessages.map((c,i) => <ChatMessage name={c.name} key = {i} message = {c.message} />)
   }
    
   
    </div>
  )
}

export default LiveChat
