import React from "react";
import { 
    StyleSheet, 
    Text, 
    View,
    Pressable,
    Image
} from 'react-native';

export default function Output(props: { password: string, placeholder: string, handleCopy: (password) => void }) {
  return (
    <View style={styles.view}>
         {props.password === '' ? (
                <View style={styles.textView}>   
                  <Text style={styles.text }>{props.placeholder}</Text>
                </View>
                
            ) : (
                <>
                <View style={styles.textView}>
                  <Text style={styles.text}>{props.password}</Text>
                  <Pressable onPress={() => props.handleCopy(props.password)}>
                    <Image 
                      source={require('../../assets/copy.png')} 
                      style={styles.image}          
                    />
                  </Pressable>            
                </View>
                </>
            )}
    </View>
  );
};

const styles = {
  textView: {
      flexDirection: "row", // Use correct property name
      alignItems: 'center', // Optional: to center items vertically
      justifyContent: 'space-between',
      borderWidth: 1,
      backgroundColor: "#f9f9f9",
  },

  image : {
      width: 40,
      height: 40,
      backgroundColor: "black",
  },

  text: {
      flex: 1,  
      margin: 10
  },

  view: {
      margin: 12,  
      width: "94%"
  }
};