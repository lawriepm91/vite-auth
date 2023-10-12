import { useContext } from 'react'
import { Context as AuthContext } from '../context'

export function useAuthContext() {
  return useContext(AuthContext)
}

export function useIsAuthenticated() {
  const context = useAuthContext()
  return !!context.user
};
