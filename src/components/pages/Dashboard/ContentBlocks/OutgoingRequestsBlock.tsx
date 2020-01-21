import React from 'react'
import * as microsoftTeams from '@microsoft/teams-js'
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
				const person = userInfo.find(f => f.id === m.to)
				return (
					<MessageCard key={i} message={m} person={person}>
						{m.messageState === MessageState.Accepted && (
							<div className={styles.btnsCnt}>
								<div className={styles.btnCnt}>
									<PrimaryButton
										text="Chat"
										onClick={() =>
											microsoftTeams.executeDeepLink(
												`https://teams.microsoft.com/l/chat/0/0?users=${person &&
													person.email}`,
											)
										}
										isSmall
										isAlt
									/>
								</div>
								<div className={styles.btnCnt}>
									<PrimaryButton
										text="Email"
										onClick={() =>
											microsoftTeams.executeDeepLink(
												'mailto:bortega@example.com',
											)
										}
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
