import { createFeatureSelector } from '@ngrx/store'
import { PopularTagsStateInterface } from '@shared/modules/popular-tags/types/popular-tags-state.interface'

export const popularTagsFeatureSelector =
	createFeatureSelector<PopularTagsStateInterface>('popularTags')
