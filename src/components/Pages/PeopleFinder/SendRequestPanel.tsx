import React, { memo } from 'react'
import styles from './SendRequestPanel.module.scss'
import { jsStyles } from './SendRequestPanel.styles'
// import { PrimaryButton, TextArea } from 'msteams-ui-components-react'
import { PrimaryButton, TextField } from 'office-ui-fabric-react'

export interface SendRequestPanelProps {
	selectedEmployees: string[]
}

export const SendRequestPanel: React.FC<SendRequestPanelProps> = memo(
	({ selectedEmployees }) => {
		return (
			<div className="sendRequestCnt">
				<div className={styles.textareaCnt}>
					<TextField
						autoFocus
						placeholder="Tell this person more about why you want to connect with them"
						label="Message"
						style={jsStyles.messageTxtBox}
						multiline
						// value=''
						// onChange={this.onValueChanged}
					/>
				</div>
				<div className={styles.btnCnt}>
					<PrimaryButton style={jsStyles.sendBtn}>Send Message</PrimaryButton>
				</div>
			</div>
		)
	},
)
