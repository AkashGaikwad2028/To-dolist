import React from 'react'
import { useState } from 'react'
import {  View,TextInput, TouchableOpacity,Text, StyleSheet, SafeAreaView, FlatList} from "react-native"

export default function TodoList() {
    
    // const initiateValues=[{id:"",task:""}]
    const[TaskValue,setTaskvalue]=useState([])
    const[submit,setSubmit]=useState([])

const HandelChange=(text)=>{
setTaskvalue((pre)=>{
    return{
        ...pre,
        task:text,    
    }
})
}

// const HandelChange = (text) => {
//     setTaskvalue((prev) => [
//       ...prev,
//       {
//         id:Math.floor(Math.random() * 10) + 1,
//         task:text,
//       }
//     ]);
//   };

console.log("taskValue",TaskValue)

const HandelSubmit=()=>{
setSubmit([...submit,TaskValue])
setTaskvalue("")
}



console.log("submit",submit,"TaskValue",TaskValue)

// const _renderItem=({item})=>{
//     console.log("item",item)
// }

const DeleteHnadeler=(index)=>{
    setSubmit(submit.filter((item, i) => i !== index));
}

  return (
    <SafeAreaView>
   <View style={styles.subContainer}>
<View>
    <TextInput style={styles.TextInput} onChangeText={(text)=>HandelChange(text)} value={TaskValue}/>
    <View style={styles.btncontainer}>
    <TouchableOpacity style={styles.Button} onPress={HandelSubmit}><Text style={styles.Text}>Add Item</Text></TouchableOpacity>
    </View>
</View>
<View>
    <FlatList
    data={submit}
    renderItem={({item,index})=>(
        <View>
        <Text style={styles.textshown}>{item.task}</Text>
        <View style={styles.btncontainer1}>
    <TouchableOpacity style={styles.Button1} onPress={()=>DeleteHnadeler(index)}><Text style={styles.Text}>Delete</Text></TouchableOpacity>
    <TouchableOpacity style={[styles.Button1,{marginHorizontal:5}]}><Text style={styles.Text}>Edit</Text></TouchableOpacity>
    </View>
    </View>
    )}
    keyExtractor={(item, index) => index.toString()}
    />
   
</View>
   </View>
   </SafeAreaView>
  )
}

const styles= StyleSheet.create({

    TextInput:{
        borderWidth:2,
        textAlign:"center",
       color:"black",
       fontSize:20
    },
    Text:{
        color:"white",
        textAlign:"center",
        fontSize:20
    },
    subContainer:{
        margin:25
    },
    Button:{
        backgroundColor:"blue",
        width:200,
        padding:10,
        marginTop:20
    },
    Button1:{
        backgroundColor:"blue",
        width:100,
        padding:10,
        marginTop:20

    },
    btncontainer:{
        flexDirection:"column",
        alignItems:"center"
    },
    btncontainer1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    textshown:{
        backgroundColor:"yellow",
        padding:10,
        textAlign:'center',
        marginTop:10,
        fontSize:20,
        fontWeight:"bold",
        color:"red"
    }
})