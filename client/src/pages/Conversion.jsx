import useGetConversations from '../hooks/useGetConversation';
import {getRandomEmoji} from '../utils/emojis'
import Conversionitem from '../pages/Conversionitem'

function Conversion() {
	const { loading, conversations } = useGetConversations();

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation) => (
				<Conversionitem
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
}


export default Conversion
