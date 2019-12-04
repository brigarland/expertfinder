import {
	Skill,
	Project,
	Org,
	FilterExpression,
	BooleanOperation,
	FilterOperation,
	EmployeeFields,
} from '../../../api'

export function buildFilter(
	selectedOrgs: Org[],
	selectedSkills: Skill[],
	selectedProjects: Project[],
) {
	const result: FilterExpression = {
		op: BooleanOperation.AND,
		clauses: [
			...selectedSkills.map(o => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Organization,
				value: o,
			})),
			...selectedSkills.map(s => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Skills,
				value: s,
			})),
			...selectedProjects.map(p => ({
				op: FilterOperation.Equals,
				field: EmployeeFields.Projects,
				value: p,
			})),
		],
	}

	return result
}
