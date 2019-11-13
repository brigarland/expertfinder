import React from 'react'
import { PersonCardCollection } from './PersonCardCollection'
import renderer from 'react-test-renderer'
it('renders correctly', () => {
	const personItems = [
		{
			id: 'bgarland@bpcs.com',
			email: 'bgarland@bpcs.com',
			function: 'Engineering',
			organization: 'Engineering',
			region: 'West',
			skills: [
				'Management',
				'Pearl',
				'React',
				'Python',
				'Gremlin',
				'Angular',
				'Cosmos',
			],
			projects: [
				'Azure Templates',
				'Bing',
				'Volumetric',
				'Workplace Intelligence',
				'My Analytics',
			],
			topics: [
				'Customer Solutions',
				'C# compilers',
				' Organization Network Analysis',
				' Topic Recommendation',
				'Linear regression',
			],
			eigenCentrality: 0.8,
			betweenness: 0.6,
			pageRank: 0.7,
			_rid: '-jJ8ALmsliQHAAAAAAAAAA==',
			_self: 'dbs/-jJ8AA==/colls/-jJ8ALmsliQ=/docs/-jJ8ALmsliQHAAAAAAAAAA==/',
			_etag: '"0b00dc0a-0000-0700-0000-5da8da920000"',
			_attachments: 'attachments/',
			_ts: 1571347090,
		},
		{
			id: 'aklimov@microsoft.com',
			email: 'aklimov@microsoft.com',
			function: 'Research',
			organization: 'Research',
			region: 'North',
			skills: [
				'Management',
				'Pearl',
				'React',
				'Python',
				'Gremlin',
				'Leadership',
				'Cosmos',
				'Machine learning',
			],
			projects: [
				'Azure Templates',
				'Bing',
				'Volumetric',
				'Teaser',
				'EBC Experience',
			],
			topics: [
				'Machine learning',
				'Artificial Intelligence',
				' Organization Network Analysis',
				' Topic Recommendation',
				'Claims Management',
			],
			eigenCentrality: 0.6,
			betweenness: 0.8,
			pageRank: 0.8,
			_rid: '-jJ8ALmsliQDAAAAAAAAAA==',
			_self: 'dbs/-jJ8AA==/colls/-jJ8ALmsliQ=/docs/-jJ8ALmsliQDAAAAAAAAAA==/',
			_etag: '"0b001e0a-0000-0700-0000-5da8da700000"',
			_attachments: 'attachments/',
			_ts: 1571347056,
		},
	]

	const tree = renderer
		.create(<PersonCardCollection personItems={personItems} />)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
