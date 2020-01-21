import { useState, useCallback } from 'react'
import { debounce } from 'lodash'
import api, { IPerson, BooleanExpression } from '../api'

const FILTER_DEBOUNCE = 250

interface IFilterValues {
	organization: string[]
	skills: string[]
	projects: string[]
}

export function usePeopleFilter(): [
	IPerson[],
	(filter: BooleanExpression) => void,
] {
	const [matches, setMatches] = useState<IPerson[]>([])
	const handleFilterChanged = useCallback(
		debounce((expr: BooleanExpression) => {
			// hack to clear results - API not returning matching results
			if (!expr.clauses.length) {
				setMatches([])
			} else {
				const filterValues: IFilterValues = {
					organization: [],
					skills: [],
					projects: [],
				}
				// get filter values
				expr.clauses.forEach((f: any): void => {
					switch (f.field.name) {
						case 'organization':
							filterValues.organization.push(f.value)
							break
						case 'skills':
							filterValues.skills.push(f.value)
							break
						case 'projects':
							filterValues.projects.push(f.value)
							break
						default:
						// do nothing
					}
				})
				api.getPeople(expr).then(result => {
					const filteredResult = result
						.filter((p: IPerson): boolean => {
							return !!filterValues.organization.length
								? filterValues.organization.includes(p.organization)
								: true
						})
						.filter((p: IPerson): boolean => {
							return !!filterValues.skills.length
								? filterValues.skills.every(f => p.skills.includes(f))
								: true
						})
						.filter((p: IPerson): boolean => {
							return !!filterValues.projects.length
								? filterValues.projects.every(f => p.projects.includes(f))
								: true
						})
					setMatches(filteredResult)
				})
			}
		}, FILTER_DEBOUNCE),
		[setMatches],
	)

	return [matches, handleFilterChanged]
}
