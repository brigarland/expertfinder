import React from 'react'
import {
	DefaultButton as FabricDefaultButton,
	IButtonProps,
} from 'office-ui-fabric-react'
import { FabricCustomStyles } from '../../../styles/FabricCustomStyles'

export interface IDefaultButtonProps extends IButtonProps {
	/**
	 * Smaller version of button
	 */
	isSmall?: boolean
}

export const DefaultButton: React.FC<IDefaultButtonProps> = props => {
	const { isSmall } = props
	// filter out added props for button
	const filteredProps: any = { ...props }
	filteredProps.isSmall && delete filteredProps.isSmall
	// build styles
	let styles = {}
	if (isSmall) {
		styles = FabricCustomStyles.smallButton
	}
	return <FabricDefaultButton styles={styles} {...filteredProps} />
}
