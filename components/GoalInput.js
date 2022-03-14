import {View, TextInput,Button,StyleSheet,Modal} from 'react-native';
import React,{useState} from 'react';


const GoalInput = props =>{


      const [enteredGoal,setEnteredGoal]=useState('');

      const addGoalHandler=()=>{

        props.addGoal (enteredGoal);
        setEnteredGoal('');
      }

      const cancelGoalHandler=()=>{

        props.cancelGoal();
        setEnteredGoal('');
      }


    
    return(
        
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.content}>
              <TextInput placeholder='Course goal...' style={styles.textInput} value={enteredGoal} onChangeText={setEnteredGoal} />
              <View style={styles.btnContainer}>
                  <View style={styles.button}><Button title='Cancel' color="gainsboro" onPress={cancelGoalHandler} /></View>
                  <View style={styles.button}><Button title='Add' onPress={addGoalHandler}/></View>
              </View>
              
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    textInput:{
        marginBottom:10,
        borderBottomWidth:2,
        width:'80%',
        borderStyle:'solid',
        borderColor:'dodgerblue'
      },
    
      content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },

      btnContainer:{
          width:'60%',
          flexDirection:'row',
          justifyContent:'space-between'
          
      },

      button:{
        width:'40%'
      }
})

export default GoalInput;