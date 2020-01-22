import React, { memo, lazy, Suspense } from 'react'

import { Route } from 'react-router-dom'
const Dashboard = lazy(() => import('../Pages/Dashboard'))
const PeopleFinder = lazy(() => import('../Pages/PeopleFinder'))
const SkillsMarketplace = lazy(() => import('../Pages/SkillsMarketplace'))
const Profile = lazy(() => import('../Pages/Profile'))

export const Routes: React.FC = memo(() => (
	<Suspense fallback={<div></div>}>
		<Route path="/" exact component={Dashboard} />
		<Route path="/experts" component={PeopleFinder} />
		<Route path="/skills-marketplace" component={SkillsMarketplace} />
		<Route path="/profile" component={Profile} />
	</Suspense>
))
