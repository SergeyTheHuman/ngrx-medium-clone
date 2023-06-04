import { onLoginFailure } from '@auth/store/reducers/login/login-failure.reduce'
import { onLoginSuccess } from '@auth/store/reducers/login/login-success.reducer'
import { onLogin } from '@auth/store/reducers/login/login.reducer'

export const loginReducers = [onLogin, onLoginSuccess, onLoginFailure]
