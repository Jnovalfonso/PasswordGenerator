import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
} from "react-native";

    
export default function InputBox(props: { length: number, setLength: (length: number) => void, reset: boolean }) {
    const [text, setText] = useState('');
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (props.reset) {
        setText('');
        }
    }, [props.reset]);
    
    const handleTextChange = (value: string) => {
        if (value.length <= 2) {
            setText(value);
            const lengthValue = parseInt(value);
            if (!isNaN(lengthValue)) {
                props.setLength(lengthValue);
            }
            else {
                props.setLength(0);  
            }
        }
    };       

    return (
        <View style={styles.view}>
            <TextInput
                style={styles.input}
                placeholder="Password Length (8-16)"
                onChangeText={handleTextChange}
                value={text}
                maxLength={2}
            />
        </View>
    );
}

const styles = {
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#f9f9f9",
    },

    view : {
        width: "100%"
    }
};