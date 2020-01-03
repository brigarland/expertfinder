import React from 'react'
import { MessageState } from '../../../../api'
import {
	useCurrentUser,
	useUserInfo,
	useOutgoingMessages,
} from '../../../../hooks'
import { MessageCard } from '../../../Shared'
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react'
import { FabricCustomStyles } from '../../../../styles'
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
									<DefaultButton
										text="Chat"
										styles={FabricCustomStyles.smallButton}
										onClick={() => console.log('Opening Teams Chat...')}
									/>
								</div>
								<div className={styles.btnCnt}>
									<PrimaryButton
										text="Email"
										styles={FabricCustomStyles.smallButton}
										onClick={() => console.log('Opening Outlook...')}
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
