import React from 'react'
import LiveComments from './LiveComments'

const LiveChatting = () => {
  return (
    <div>
     <div className='h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg'>
      <LiveComments name='Rahul' message='This is Live Class ' />
      <LiveComments name='Rahul' message='This is Live Class ' />
    </div>
    </div>
  )
}

export default LiveChatting;