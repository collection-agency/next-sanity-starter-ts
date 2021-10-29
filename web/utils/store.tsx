import { createContext, useReducer } from 'react'
import { storeReducer } from './reducers'

export interface StoreIF {
  data: any
}

const initialStoreState = {
  data: null,
}

const AppContext = createContext<{
  state: StoreIF
  dispatch: React.Dispatch<any>
}>({
  state: initialStoreState,
  dispatch: () => null
})

const AppProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(storeReducer, initialStoreState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };