import { AuthStateInterface } from '@auth/store/types/auth-state.interface'
import { createFeatureSelector } from '@ngrx/store'

export const authFeatureSelector =
	createFeatureSelector<AuthStateInterface>('auth')
