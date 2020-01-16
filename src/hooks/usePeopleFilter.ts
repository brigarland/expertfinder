import { useState, useCallback } from 'react'
import { debounce } from 'lodash'
import api, { IPerson, BooleanExpression } from '../api'

const FILTER_DEBOUNCE = 250

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
				api.getPeople(expr).then(result => setMatches(result))
			}
		}, FILTER_DEBOUNCE),
		[setMatches],
	)

	return [matches, handleFilterChanged]
}
