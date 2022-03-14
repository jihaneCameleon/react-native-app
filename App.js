import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList,ScrollView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals,setCourseGoals]= useState([]);
  const [isAddMode,setIsAddMode]=useState(false);
  console.log(courseGoals);

  const addGoal = goalTitle => {
  
    setCourseGoals([...courseGoals,{id:Math.random().toString(),value:goalTitle}]);
    setIsAddMode(false);
  }

  const cancelGoal= ()=>{
    setIsAddMode(false);
  }


  const removeGoal= goalId=>{

   setCourseGoals(currentGoals=> {
      return currentGoals.filter((goal)=> goal.id !== goalId);
      
   })  
   
  }

  return (
    <View style={styles.container}>
      <Button title='Add new Goal' onPress={()=>setIsAddMode(true)} />
      <GoalInput visible={isAddMode} addGoal={addGoal} cancelGoal={cancelGoal} />
      <FlatList
        keyExtractor={(item,index) => item.id}
          data={courseGoals}
          renderItem={itemData => 
              <GoalItem id={itemData.item.id} onDelete={removeGoal} content={itemData.item.value} />
          }
        />  
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30
  },



});
