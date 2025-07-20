import React, { useEffect, useRef } from 'react'
import { useChatStore } from '../store/useChatStore'
import ChatHeader from './ChatHeader'
import MessageInput from './MessageInput'
import ChatSkeleton from './skeletons/ChatSkeleton'
import { useAuthStore } from '../store/useAuthStore'

const ChatContainer = () => {

  const { messages, isMessagesLoading, getMessages, selectedUser, subscribeToMessages, unSubscribeFromMessages } = useChatStore()
  const { authUser } = useAuthStore()
  const messageEndRef = useRef(null)

  useEffect(() => {
    getMessages(selectedUser._id)

    subscribeToMessages();
    return () => unSubscribeFromMessages();

  }, [selectedUser._id, getMessages, subscribeToMessages, unSubscribeFromMessages])

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])
  

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex overflow-auto flex-col">
        <ChatHeader />
        <ChatSkeleton />
        <MessageInput />
      </div>
    )
  }

  return (
    <div className='flex-1 flex overflow-auto flex-col'>
      <ChatHeader />

      <div className='flex-1 overflow-y-auto p-4 sapce-y-4'>
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? 'chat-end' : 'chat-start'}`}
            ref={messageEndRef}
          >
            <div className='chat-image avatar'>
              <div className="size-10 rounded-full border border-base-100">
                <img
                  src={message.senderId === authUser._id ? authUser.profilePic || "/avatar.png" : selectedUser.profilePic || "/avatar.png"}
                  alt="User Avatar"
                />
              </div>
            </div>

            <div className={`chat-bubble flex flex-col
                ${message.senderId === authUser._id ? 'chat-bubble-primary text-primary-content/70' : 'chat-bubble-base-200'}
              `}>
              {message.image && (
                <img
                  src={message.image}
                  alt="Attachment"
                  className="sm:max-w-[200px] rounded-md mb-2"
                />
              )}
              {message.text && <p className='mr-10'>{message.text}</p>}
              <time className="text-[12px] opacity-50 flex justify-end -mt-2">
                {message.createdAt ? new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12:false }) : ''}
              </time>
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  )
}

export default ChatContainer
