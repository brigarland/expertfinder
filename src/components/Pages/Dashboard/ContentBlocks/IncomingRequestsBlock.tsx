import React from 'react'
import {
	useCurrentUser,
	useUserInfo,
	useIncomingMessages,
} from '../../../../hooks'
import { MessageCard, PrimaryButton, DefaultButton } from '../../../Shared'
import styles from './MessageBlocks.module.scss'

export const IncomingRequestsBlock: React.FC = () => {
	const currentUser = useCurrentUser()
	const currentUserId = currentUser ? currentUser.id : ''
	const incomingMessages = useIncomingMessages(currentUserId)
	const personIds = incomingMessages.map(f => f.from)
	const userInfo = useUserInfo(personIds)
	return (
		<div>
			{incomingMessages.map((m, i) => {
				return (
					<MessageCard
						key={i}
						message={m}
						person={userInfo.find(f => f.id === m.from)}
						disableFlag
					>
						<div className={styles.btnsCnt}>
							<div className={styles.btnCnt}>
								<DefaultButton
									text="Decline"
									onClick={() => console.log('Declined')}
									isSmall
								/>
							</div>
							<div className={styles.btnCnt}>
								<PrimaryButton
									text="Refer"
									onClick={() => console.log('Referred')}
									isAlt
									isSmall
								/>
							</div>
							<div className={styles.btnCnt}>
								<PrimaryButton
									text="Accept"
									onClick={() => console.log('Accepted')}
									isSmall
								/>
							</div>
						</div>
					</MessageCard>
				)
			})}
		</div>
	)
}
