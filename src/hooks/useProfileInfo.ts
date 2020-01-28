import { CertType, IProject, ICert, ProjectType } from '../api'

export function useUserProjects(): IProject[] {
	return demoUserProjects
}
export function useUserCerts(): ICert[] {
	return demoUserCerts
}

const demoUserProjects: IProject[] = [
	{
		title: 'Azure Templates Regraph',
		startDate: new Date('January 1, 2019 00:00:00'),
		// endDate: new Date('December 1, 2019 00:00:00'),
		type: ProjectType.Infrastructure,
	},
	{
		title: 'Surface Global Launch',
		startDate: new Date('February 1, 2019 00:00:00'),
		endDate: new Date('July 1, 2019 00:00:00'),
		type: ProjectType.GlobalNetworking,
	},
	{
		title: 'Microsoft.com Redesign',
		startDate: new Date('March 1, 2018 00:00:00'),
		endDate: new Date('November 1, 2019 00:00:00'),
		type: ProjectType.BusinessDev,
	},
]

const demoUserCerts: ICert[] = [
	{
		title: 'PCM - Digital Management Certification',
		issuer: 'American Marketing Association',
		issueDate: new Date('February 1, 2020 00:00:00'),
		type: CertType.Award,
	},
	{
		title: 'Facebook Blueprint Certification',
		issuer: 'Facebook',
		issueDate: new Date('March 1, 2019 00:00:00'),
		type: CertType.Accolade,
	},
	{
		title: 'Bing Ads Professional Certification',
		issuer: 'Microsoft',
		issueDate: new Date('January 1, 2019 00:00:00'),
		type: CertType.Certification,
	},
]
