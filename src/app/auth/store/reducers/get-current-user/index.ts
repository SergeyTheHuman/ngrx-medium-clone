import { onGetCurrentUserFailure } from '@auth/store/reducers/get-current-user/get-current-user-failure.reducer'
import { onGetCurrentUserSuccess } from '@auth/store/reducers/get-current-user/get-current-user-success.reducer'
import { onGetCurrentUser } from '@auth/store/reducers/get-current-user/get-current-user.reducer'

export const getCurrentUserReducers = [
	onGetCurrentUser,
	onGetCurrentUserSuccess,
	onGetCurrentUserFailure,
]
