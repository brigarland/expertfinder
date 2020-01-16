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
	if (
		!selectedOrgs.length &&
		!selectedSkills.length &&
		!selectedProjects.length
	)
		return { op: BooleanOperation.AND, clauses: [] }
	const result: FilterExpression = {
		op: BooleanOperation.AND,
		clauses: [
			...selectedOrgs.map(o => ({
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
