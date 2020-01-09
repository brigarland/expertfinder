import React, { useState, useEffect } from 'react'
import { MessageState } from '../../../api'
import { Icon } from 'office-ui-fabric-react'
import { ColorPalette } from '../../../styles/ColorPalette'
import styles from './MessageCard.module.scss'

export interface IMessageCardFlagProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * state of the message that flag will designate
	 */
	messageState: MessageState
}

export const MessageCardFlag: React.FC<IMessageCardFlagProps> = ({
	messageState,
}) => {
	const [icon, setIcon] = useState<string>()
	const [text, setText] = useState<string>()
	const [bgColor, setBgColor] = useState<string>()
	const [txtColor, setTxtColor] = useState<string>()
	useEffect(() => {
		switch (messageState) {
			case MessageState.Accepted:
				setText('Accepted')
				setIcon('CheckMark')
				setBgColor(ColorPalette.green01)
				setTxtColor(ColorPalette.white)
				break
			case MessageState.Declined:
				setText('Declined')
				setIcon('Blocked')
				setBgColor(ColorPalette.gray09)
				setTxtColor(ColorPalette.black)
				break
			case MessageState.Pending:
				setText('Pending')
				setIcon('Clock')
				setBgColor(ColorPalette.gray06)
				setTxtColor(ColorPalette.black)
				break
			case MessageState.Suggested:
				setText('Suggested')
				setIcon('Megaphone')
				setBgColor(ColorPalette.gray09)
				setTxtColor(ColorPalette.black)
				break
			default:
				setText('')
		}
	}, [messageState])

	if (!setText) {
		return <></>
	} else {
		return (
			<div
				className={styles.messageCardFlagRoot}
				style={{ backgroundColor: bgColor, color: txtColor }}
			>
				<div className={styles.iconCnt}>
					<Icon iconName={icon} />
				</div>
				<div className={styles.textCnt}>{text}</div>
			</div>
		)
	}
}
