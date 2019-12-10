import React, { memo, lazy, Suspense } from 'react'
import { Kudos } from '../pages/Kudos'

import { Route } from 'react-router-dom'
const Dashboard = lazy(() => import('../pages/Dashboard'))
const PeopleFinder = lazy(() => import('../pages/PeopleFinder'))
const SkillsMarketplace = lazy(() => import('../pages/SkillsMarketplace'))
const Profile = lazy(() => import('../pages/Profile'))

export const Routes: React.FC = memo(() => (
	<Suspense fallback={<div></div>}>
		<Route path="/" exact component={Dashboard} />
		<Route path="/experts" component={PeopleFinder} />
		<Route path="/influencers" component={PeopleFinder} />
		<Route path="/kudos" component={Kudos} />
		<Route path="/skills-marketplace" component={SkillsMarketplace} />
		<Route path="/profile" component={Profile} />
	</Suspense>
))
