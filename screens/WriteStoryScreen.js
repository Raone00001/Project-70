import React from 'react';
import {Text, View, TouchableOpacity, TextInput, Image, StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class WriteStoryScreen extends React.Component {
  
    render() {
        return(
          <View style={styles.container}>

            <Text style={styles.title}>Story Hub</Text>

            <View style={styles.inputView}>
              <TextInput style={styles.inputTitle} placeholder="Story Title"/>
            </View>

            <View style={styles.inputView}>
              <TextInput style={styles.inputAuthor} placeholder="Story Author"/>
            </View>

            <View style={styles.inputView}>
              <TextInput 
                style={styles.inputStory} 
                placeholder="Story" 
                multiline={true}
              />
            </View>

            <View>
              <TouchableOpacity 
                style={styles.submitButton}
                onPress={()=>{
                  alert("Start writing!")
                }}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>

          </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },

    submitButton:{
      backgroundColor: 'pink',
      padding: 10,
      margin: 10,
      fontWeight:5,
    },

    inputView:{
      flexDirection: 'column',
      marginRight:3,
    },

    inputTitle:{
      width: 300,
      height: 30,
      borderWidth: 2,
      borderRightWidth: 2,
      fontSize: 15,
      marginRight:'5%',
      marginTop: '10%',
    },

    inputAuthor:{
      width: 300,
      height: 30,
      borderWidth: 2,
      borderRightWidth: 2,
      fontSize: 15,
      marginRight:'5%',
      marginTop: '5%',
    },

    inputStory:{
      width: 300,
      height: 200,
      borderWidth: 2,
      borderRightWidth: 2,
      fontSize: 15,
      marginTop: '5%',
    },

    title:{
      backgroundColor:"pink",
      alignItems: 'center',
      fontSize: 20,
      fontWeight: '550',
      paddingBottom:10,
      paddingTop:10,
      paddingLeft:120.5,
      paddingRight:120.5,
    }

  });