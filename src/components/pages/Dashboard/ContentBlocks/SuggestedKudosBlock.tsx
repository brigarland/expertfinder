import React from 'react'
import {
	useCurrentUser,
	useUserInfo,
	useSuggestedKudos,
} from '../../../../hooks'
import { MessageCard, PrimaryButton } from '../../../Shared'
import styles from './MessageBlocks.module.scss'

export const SuggestedKudosBlock: React.FC = () => {
	const currentUser = useCurrentUser()
	const currentUserId = currentUser ? currentUser.id : ''
	const suggestedKudos = useSuggestedKudos(currentUserId)
	const personIds = suggestedKudos.map(f => f.to)
	const userInfo = useUserInfo(personIds)
	return (
		<div>
			{suggestedKudos.map((m, i) => {
				return (
					<MessageCard
						key={i}
						message={m}
						person={userInfo.find(f => f.id === m.to)}
					>
						<div className={styles.btnsCnt}>
							<div className={styles.btnCnt}>
								<PrimaryButton
									text="Edit"
									onClick={() => console.log('?...')}
									isSmall
									isAlt
								/>
							</div>
							<div className={styles.btnCnt}>
								<PrimaryButton
									text="Send"
									onClick={() => console.log('Sending Kudos...')}
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
