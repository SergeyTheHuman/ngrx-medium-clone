import { createFeatureSelector } from '@ngrx/store'
import { FeedStateInterface } from '@shared/modules/feed/types/feed-state.interface'

export const FeedFeatureSelector =
	createFeatureSelector<FeedStateInterface>('feed')
