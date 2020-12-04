import createDataContext from './createDataContext'

const initialSate = []

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOGPOST':
      return [
        ...state,
        {
          id: ~~(Math.random() * 9999),
          title: `Blog Post #${state.length + 1}`
        }
      ]
    case 'DELETE_BLOGPOST':
      return state.filter((blog) => blog.id !== action.payload)
    default:
      return state
  }
}

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({type: 'ADD_BLOGPOST'})
  }
}

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'DELETE_BLOGPOST', payload: id})
  }
}

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  initialSate
)
