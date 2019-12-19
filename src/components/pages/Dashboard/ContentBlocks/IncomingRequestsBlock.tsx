import {
	IMessage,
	MessageType,
	MessageContext,
	MessageState,
} from '../../../../api'
import React from 'react'
import { useUserInfo } from '../../../../hooks'
import { MessageCard } from '../../../Shared'
import styles from './IncomingRequestsBlock.module.scss'

const demoMessages: IMessage[] = [
	{
		to: 'jsmith@microsoft.com',
		from: 'cevans@microsoft.com',
		date: new Date('December 12, 2019 13:16:00'),
		messageType: MessageType.Request,
		contextType: MessageContext.Mentor,
		messageState: MessageState.Pending,
	},
	{
		to: 'jsmith@microsoft.com',
		from: 'kdagal@microsoft.com',
		date: new Date('December 5, 2019 23:34:00'),
		messageType: MessageType.Request,
		contextType: MessageContext.Influencer,
		messageState: MessageState.Pending,
	},
	{
		to: 'jsmith@microsoft.com',
		from: 'kwashington@microsoft.com',
		date: new Date('November 27, 2019 03:23:00'),
		messageType: MessageType.Request,
		contextType: MessageContext.Expert,
		messageState: MessageState.Pending,
	},
]

export const IncomingRequestsBlock: React.FC = () => {
	const personIds = demoMessages.map(f => f.from)
	const userInfo = useUserInfo(personIds)
	// console.log('userInfo: ', userInfo)
	return (
		<div className={styles.incomingRequestsBlockRoot}>
			{demoMessages.map((m, i) => {
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
