import React from 'react'
import { MessageState } from '../../../../api'
import {
	useCurrentUser,
	useUserInfo,
	useOutgoingMessages,
} from '../../../../hooks'
import { MessageCard, PrimaryButton } from '../../../Shared'
import styles from './MessageBlocks.module.scss'

export const OutgoingRequestsBlock: React.FC = () => {
	const currentUser = useCurrentUser()
	const currentUserId = currentUser ? currentUser.id : ''
	const outgoingMessages = useOutgoingMessages(currentUserId)
	const personIds = outgoingMessages.map(f => f.to)
	const userInfo = useUserInfo(personIds)
	return (
		<div>
			{outgoingMessages.map((m, i) => {
				return (
					<MessageCard
						key={i}
						message={m}
						person={userInfo.find(f => f.id === m.to)}
					>
						{m.messageState === MessageState.Accepted && (
							<div className={styles.btnsCnt}>
								<div className={styles.btnCnt}>
									<PrimaryButton
										text="Chat"
										onClick={() => console.log('Opening Teams Chat...')}
										isSmall
										isAlt
									/>
								</div>
								<div className={styles.btnCnt}>
									<PrimaryButton
										text="Email"
										onClick={() => console.log('Opening Outlook...')}
										isSmall
									/>
								</div>
							</div>
						)}
					</MessageCard>
				)
			})}
		</div>
	)
}
