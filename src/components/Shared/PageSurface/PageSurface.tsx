import React, { memo } from 'react'
import styles from './PageSurface.module.scss'
import { Helmet } from 'react-helmet'

export interface IPageSurfaceProps
	extends React.AllHTMLAttributes<HTMLElement> {
	/**
	 * Header Text to go at top of Sidebar
	 */
	title: string
}
export const PageSurface: React.FC<IPageSurfaceProps> = memo(
	({ title, children }) => (
		<div className={styles.pageRoot} data-component-type="Surface">
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<div className={styles.pageCnt}>{children}</div>
		</div>
	),
)
