import React from 'react'
import {
	useCurrentUser,
	useUserInfo,
	useIncomingMessages,
} from '../../../../hooks'
import { MessageCard } from '../../../Shared'
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react'
import { FabricCustomStyles } from '../../../../styles'
import styles from './IncomingRequestsBlock.module.scss'

export const IncomingRequestsBlock: React.FC = () => {
	const currentUser = useCurrentUser()
	const currentUserId = currentUser ? currentUser.id : ''
	const incomingMessages = useIncomingMessages(currentUserId)
	const personIds = incomingMessages.map(f => f.from)
	const userInfo = useUserInfo(personIds)
	return (
		<div className={styles.incomingRequestsBlockRoot}>
			{incomingMessages.map((m, i) => {
				return (
					<MessageCard
						key={i}
						message={m}
						person={userInfo.find(f => f.id === m.from)}
					>
						<div className={styles.btnsCnt}>
							<div className={styles.btnCnt}>
								<DefaultButton
									text="Decline"
									styles={FabricCustomStyles.smallButton}
									onClick={() => console.log('Declined')}
								/>
							</div>
							<div className={styles.btnCnt}>
								<DefaultButton
									text="Refer"
									styles={FabricCustomStyles.smallButton}
									onClick={() => console.log('Referred')}
								/>
							</div>
							<div className={styles.btnCnt}>
								<PrimaryButton
									text="Accept"
									styles={FabricCustomStyles.smallButton}
									onClick={() => console.log('Accepted')}
								/>
							</div>
						</div>
					</MessageCard>
				)
			})}
		</div>
	)
}
