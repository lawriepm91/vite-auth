import type * as Types from './reducer.types'
import { AuthActions } from '../../actions'

export function authReducer(state: Types.State, action: Types.Action) {
  const { type, payload } = action
  switch (type) {
    case AuthActions.LOGIN:
      return payload
    case AuthActions.LOGOUT:
      return undefined
    default:
      return state
  }
}
