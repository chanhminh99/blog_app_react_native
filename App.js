import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import {BlogProvider} from './src/context/BlogContext'

const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog'
    }
  }
)

const App = createAppContainer(AppNavigator)
export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}
