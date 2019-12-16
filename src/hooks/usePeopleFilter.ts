import { useState, useCallback } from 'react'
import { debounce } from 'lodash'
import api, { IPerson, FilterExpression } from '../api'

const FILTER_DEBOUNCE = 250

export function usePeopleFilter(): [
	IPerson[],
	(filter: FilterExpression) => void,
] {
	const [matches, setMatches] = useState<IPerson[]>([])
	const handleFilterChanged = useCallback(
		debounce((expr: FilterExpression) => {
			api.getPeople(expr).then(result => setMatches(result))
		}, FILTER_DEBOUNCE),
		[setMatches],
	)

	return [matches, handleFilterChanged]
}
