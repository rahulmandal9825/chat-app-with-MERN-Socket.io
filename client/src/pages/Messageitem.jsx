
import { useEffect, useRef } from 'react';
import useGetMessages from '../hooks/useGetMessages';
import Messagetext from './Messagetext'
import MessageSkeleton from '../skeletons/MessageSkeleton';

function Messageitem() {

  const { messages, loading } = useGetMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);


  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Messagetext message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}

    </div>
  )
}

export default Messageitem
