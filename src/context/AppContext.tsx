import React, { ReactNode, createContext, useState } from 'react'
import { WorkingWithLS } from '../utils/LocalStorage'
import { KeyLocalStorage } from '../constants/KeyLocalService'
type contextType = {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  userId: string
  permissions: string[]
  setUserId: React.Dispatch<React.SetStateAction<string>>
  setPermissions: React.Dispatch<React.SetStateAction<string[]>>
}

type contextProps = {
  children: ReactNode
}

const initialContext: contextType = {
  isAuth: Boolean(WorkingWithLS.getFromLs(KeyLocalStorage.access_token)),
  setIsAuth: () => null,
  userId: '',
  permissions: [],
  setUserId: () => null,
  setPermissions: () => null
}

export const Context = createContext<contextType>(initialContext)

function AppContext({ children }: contextProps) {
  const [isAuth, setIsAuth] = useState<boolean>(initialContext.isAuth)
  const [userId, setUserId] = useState<string>(initialContext.userId)
  const [permissions, setPermissions] = useState<string[]>(initialContext.permissions)
  return (
    <Context.Provider value={{ isAuth, setIsAuth, userId, setUserId, permissions, setPermissions }}>
      {children}
    </Context.Provider>
  )
}

export default AppContext
