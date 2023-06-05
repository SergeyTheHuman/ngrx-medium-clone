import { ProfileInterface } from '@shared/types/profile.interface'

export interface ArticleInterface {
	body: string
	title: string
	createdAt: string
	updatedAt: string
	description: string
	slug: string
	tagList: string[]
	favorited: boolean
	favoritesCount: number
	author: ProfileInterface
}
