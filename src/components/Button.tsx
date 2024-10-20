import React from "react";
import { 
  Pressable,
    StyleSheet,
    Text,
    View 
} from 'react-native';

export default function Button(props: { type: string, title: string, onPress: () => void }) {
  return (
    <>
        {props.type === '1' ? (
            <Pressable style={styles.button} onPress={props.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        ) : (
            <Pressable style={[styles.button, { backgroundColor: 'red' }]}>
                <Text style={styles.text}>{props.title}</Text>
            </Pressable>
        )}
    </>
);

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2E8AE7",
        borderRadius: 15,
        padding: 10,
        margin: 12,
        width: "100%",
        alignItems: "center",
    },

    text : {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    }
});
