import React from 'react'
import { View,Text, SafeAreaView,StyleSheet} from 'react-native'
import TodoList from './src/Todolist/TodoList'

export default function App() {
  return (
  <SafeAreaView style={styles.mainContainer}>
{/* <Text>Hello</Text> */}
<TodoList/>
</SafeAreaView>
  )
}

const styles= StyleSheet.create({
    mainContainer:{
  flex:1,
  flexDirection:"column",
    }
})
