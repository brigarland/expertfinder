import React, { CSSProperties } from 'react'
import scssStyles from './PageSurface.module.scss'
import { Helmet } from 'react-helmet'

export interface IPageSurfaceProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Page title to show in browser tab
	 */
	title: string
	/**
	 * Inline styles for the root/container element
	 */
	styles?: CSSProperties
}

export const PageSurface: React.FC<IPageSurfaceProps> = ({
	title,
	styles,
	children,
}) => (
	<div className={scssStyles.pageRoot} data-component-type="Surface">
		<Helmet>
			<title>{title}</title>
		</Helmet>
		<div className={scssStyles.pageCnt} style={styles}>
			{children}
		</div>
	</div>
)
