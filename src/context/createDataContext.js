import React, {useReducer} from 'react'

export default (reducer, actions, initialSate) => {
  const Context = React.createContext()

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialSate)

    //actions === {addBlogPost: (dispatch) => { return () => {} } }

    const boundActions = {}

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch)
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    )
  }

  return {Context, Provider}
}
