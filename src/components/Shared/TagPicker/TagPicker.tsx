import React, { useMemo, useCallback, memo } from 'react'
import {
	TagPicker as FabricTagPicker,
	ITag,
	Label,
} from 'office-ui-fabric-react'
import { TeamsUIStyles } from '../../../styles'
import styles from './TagPicker.module.scss'

export interface ITagPickerProps {
	/**
	 * Array of possible tags you can select from suggestions
	 */
	items: string[]
	/**
	 * Title of the group of selectable items like "people" or "skills"
	 * Used in UI for instruction - defaults to "items"
	 */
	itemsGroupTitle?: string
	/**
	 * The items that show up in the field - selected by user or default
	 */
	selectedItems: string[]
	/**
	 * Maximum number of items you can select
	 */
	itemLimit?: number
	/**
	 * Optional label above tag picker field
	 */
	label?: string
	/**
	 * Function to execute when selected items change
	 */
	onSelectionChanged: (selection: string[]) => void
}

export const TagPicker: React.FC<ITagPickerProps> = memo(
	({
		items,
		itemsGroupTitle = 'items',
		selectedItems,
		itemLimit = 5,
		label,
		onSelectionChanged,
	}) => {
		const suggestions = useMemo<ITag[]>(() => items.map(toTag), [items])

		const handleFilterChanged = useCallback(
			(filterText: string, tagList: ITag[]): ITag[] => {
				if (!filterText) {
					return []
				}
				return suggestions
					.filter(s => isTagQueryMatch(filterText, s))
					.filter(tag => !isTagAlreadyPresent(tag, tagList))
			},
			[suggestions],
		)
		const handleTagsChanged = useCallback(
			(items: ITag[] | undefined) => {
				onSelectionChanged((items || []).map(i => i.key))
			},
			[onSelectionChanged],
		)

		const formattedSelectedItems = useMemo(() => selectedItems.map(toTag), [
			selectedItems,
		])

		return (
			<div className={styles.categoryPickerCnt}>
				{label && <Label styles={TeamsUIStyles.oufrLabel}>{label}</Label>}
				<FabricTagPicker
					onResolveSuggestions={handleFilterChanged as any}
					selectedItems={formattedSelectedItems}
					pickerSuggestionsProps={{
						suggestionsHeaderText: `Suggested ${itemsGroupTitle}`,
						noResultsFoundText: `No ${itemsGroupTitle} found`,
					}}
					itemLimit={itemLimit}
					onChange={handleTagsChanged}
				/>
			</div>
		)
	},
)

const isTagQueryMatch = (text: string, tag: ITag) =>
	tag.name.toLowerCase().indexOf(text.toLowerCase()) === 0

const isTagAlreadyPresent = (tag: ITag, tagList?: ITag[]) => {
	if (!tagList || !tagList.length || tagList.length === 0) {
		return false
	}
	return tagList.filter(compareTag => compareTag.key === tag.key).length > 0
}

const toTag = (id: string) => ({ key: id, name: id } as ITag)
