import { type AuthActions } from '../../actions'
import { type User } from '../../types'

export interface Action {
  type: AuthActions
  payload: User | undefined
}

export interface State {
  user: User | undefined
}
