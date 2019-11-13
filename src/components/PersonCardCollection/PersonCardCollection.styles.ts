import { ICheckboxStyles } from 'office-ui-fabric-react'

export interface IPersonCardCollectionStyles {
	customCheckbox: ICheckboxStyles
}

export const jsStyles: IPersonCardCollectionStyles = {
	customCheckbox: {
		root: {
			selectors: {
				'&:hover .ms-Checkbox-checkbox': {
					borderColor: '#323130',
					background: '#fff',
					color: '#6264a7',
				},
			},
		},
		checkbox: {
			background: '#fff',
			color: '#6264a7',
			selectors: {
				'.is-checked &': {
					borderColor: '#323130',
					background: '#fff',
				},
			},
		},
		checkmark: {
			color: '#6264a7',
			selectors: {
				'.is-checked &': {
					fontWeight: 800,
				},
			},
		},
	},
}
