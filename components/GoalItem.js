import React from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';


const GoalItem=props =>{

    return(
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
          <View style={styles.listItem}>
            <Text>{props.content}</Text>
        </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      
      padding:30
    },
  
    listItem:{
      padding:10,
      marginTop:15,
      backgroundColor:'deepskyblue',
      borderColor:'royalblue',
      borderWidth:1
    }
  });

export default GoalItem;