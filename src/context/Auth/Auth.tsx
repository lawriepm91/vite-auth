import { type FC, type ReactNode, createContext } from 'react'
import type * as Types from './Auth.types'
import { useAuth } from './useAuth'

export const Context = createContext<Types.Context>({
  user: undefined,
  dispatch: () => undefined
})

export const AuthProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const { value } = useAuth()
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
