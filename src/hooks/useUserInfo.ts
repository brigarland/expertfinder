import { IPerson } from '../api'
import { TestImages } from '@uifabric/example-data'

export function useUserInfo(ids: string[]): IPerson[] {
	return demoUserInfo.filter(f => ids.includes(f.id))
}

export const demoUserInfo: IPerson[] = [
	{
		id: 'jsmith@microsoft.com',
		name: 'John Smith',
		email: 'jsmith@microsoft.com',
		imageUrl: TestImages.personaMale,
		function: 'UX Engineer',
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
	},
	{
		id: 'cevans@microsoft.com',
		name: 'Cameron Evans',
		email: 'cevans@microsoft.com',
		imageUrl: TestImages.personaFemale,
		function: 'Research Lead',
		organization: 'Creative House',
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
	},
	{
		id: 'kwashington@microsoft.com',
		name: 'Kat Washington',
		email: 'kwashington@microsoft.com',
		imageUrl: TestImages.personaFemale,
		function: 'Marketing Manager',
		organization: 'Marketing',
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
	},
	{
		id: 'kdagal@microsoft.com',
		name: 'Keith Dagel',
		email: 'kdagal@microsoft.com',
		imageUrl: TestImages.personaMale,
		function: 'Senior Recruiter',
		organization: 'Human Resources',
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
	},
	{
		id: 'amold@microsoft.com',
		name: 'Amol Dhaygude',
		email: 'amold@microsoft.com',
		imageUrl: TestImages.personaMale,
		function: 'Program Management',
		organization: 'Research',
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
	},
]
