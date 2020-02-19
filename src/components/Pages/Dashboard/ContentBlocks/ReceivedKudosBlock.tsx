import React from 'react'
import {
	useCurrentUser,
	useUserInfo,
	useReveivedKudos,
} from '../../../../hooks'
import { MessageCard } from '../../../Shared'

export const ReceivedKudosBlock: React.FC = () => {
	const currentUser = useCurrentUser()
	const currentUserId = currentUser ? currentUser.id : ''
	const receivedKudos = useReveivedKudos(currentUserId)
	const personIds = receivedKudos.map(f => f.from)
	const userInfo = useUserInfo(personIds)
	return (
		<div>
			{receivedKudos.map((m, i) => {
				return (
					<MessageCard
						key={i}
						message={m}
						person={userInfo.find(f => f.id === m.from)}
					/>
				)
			})}
		</div>
	)
}
