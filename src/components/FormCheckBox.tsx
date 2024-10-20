import React, {useState} from "react";
import { 
    StyleSheet,
    Text,
    View 
} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function FormCheckBox(props: { id: string, label: string, color: string, isChecked: (id: string, isChecked: boolean) => void }) {
  return (
    <BouncyCheckbox 
        style={styles.checkBox}
        key={props.id}
        text={props.label}
        fillColor={props.color}
        onPress={(isChecked: boolean) => props.isChecked(props.id, isChecked)} />
  );
}

const styles = StyleSheet.create({
    checkBox: {
        margin: 8,
    }
});