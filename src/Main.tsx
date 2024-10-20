import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  Clipboard,
  Alert
} from 'react-native';

import Button from './components/Button';
import InputBox from './components/InputBox';
import Output from './components/Output';
import FormCheckBox from './components/FormCheckBox';
import passwordGenerator from './utilities/passwordGenerator';
import { showErrorSnackbar, showSuccessSnackbar, showInfoSnackbar } from './utilities/utils';

export default function Main() {
    
    const [length, setLength] = useState(0); 
    const [complexity, setComplexity] = useState<string[]>([]); 
    const [password, setPassword] = useState('');

    const handleIsChecked = (id: string, isChecked: boolean) => {
        if (isChecked) {
            setComplexity((prevComplexity) => {
                if (!prevComplexity.includes(id)) {
                    return [...prevComplexity, id];
                }
                return prevComplexity;
            });
            // Alert.alert('Checkbox with id ' + id + ' is checked');
        } else {
            setComplexity((prevComplexity) => {
                return prevComplexity.filter(item => item !== id);
            });
            // Alert.alert('Checkbox with id ' + id + ' is unchecked');
        }
    };

    const handlePasswordGeneration = () => {
        let passwordLength = length;
        let checkedBoxes = complexity;

        if (passwordLength < 8 || passwordLength > 16) {
            showErrorSnackbar('Password length must be between 8 and 16 characters');
            return;
        }
        


        Alert.alert('Password Length: ' + passwordLength + ' Complexity: ' + checkedBoxes);
        let password = passwordGenerator(passwordLength, checkedBoxes);
    
        Alert.alert('Password generated: ' + password);
    }

    return (
        <SafeAreaView style={styles.mainView}>
                <Text style={styles.title}>Password Generator</Text>
                <InputBox length={length} setLength={setLength}/>
                <FormCheckBox id={'1'} label={'Upper Case Letter'} color={'blue'} isChecked={handleIsChecked}/>
                <FormCheckBox id={'2'} label={'Lower Case Letter'} color={'green'} isChecked={handleIsChecked}/>
                <FormCheckBox id={'3'} label={'Special Character'} color={'red'} isChecked={handleIsChecked}/>
                <FormCheckBox id={'4'} label={'Number'} color={'orange'} isChecked={handleIsChecked}/>
                <Output password={''} placeholder={'Select Options...'} handleCopy={handleCopy}/>
                <Button type={'1'} title={'Generate Password'} onPress={() => {handlePasswordGeneration()}}/>
                <Button type={'2'} title={'Reset'} onPress={() => {}}/>
        </SafeAreaView>
    );

    
}

const handleCopy = (password: string) => {
    Clipboard.setString(password);
    console.log(password);
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title : {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
});