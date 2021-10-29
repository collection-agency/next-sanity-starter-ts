import { StoreIF } from './store'

interface ActionIF {
  type: string 
  payload: any
} 

export const storeReducer = (state: StoreIF, action: ActionIF) => {
  switch(action.type) {
    case 'set data':
      return {
        ...state,
        data: action.payload
      }
    default:
      throw new Error()
  }
}