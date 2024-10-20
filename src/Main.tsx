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
    
    const [reset, setReset] = useState(false);
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
        let checkedBoxes = complexity

        if (passwordLength == 0) {
            Alert.alert('Please enter a valid password length');
            return;
        }
        else if (checkedBoxes.length === 0) {
            Alert.alert('Please select at least one option');0
            return;
        }
        else if (passwordLength < 8 || passwordLength > 16) {
            Alert.alert('Password length should be between 8 and 16');
            return;
        }

        let password = passwordGenerator(passwordLength, checkedBoxes);
        setPassword(password);
    
        Alert.alert('Password succesfully generated');
    }

    const handleReset = () => {
        setReset(!reset);
        setLength(0);
        setComplexity([]);
        setPassword('');
        Alert.alert('Reset successfully');
    };

    return (
        <SafeAreaView style={styles.mainView}>
                <Text style={styles.title}>Password Generator</Text>
                <InputBox length={length} setLength={setLength} reset={reset}/>
                <FormCheckBox id={'1'} label={'Upper Case Letter'} color={'blue'} isChecked={handleIsChecked} reset={reset}/>
                <FormCheckBox id={'2'} label={'Lower Case Letter'} color={'green'} isChecked={handleIsChecked} reset={reset}/>
                <FormCheckBox id={'3'} label={'Special Character'} color={'red'} isChecked={handleIsChecked} reset={reset}/>
                <FormCheckBox id={'4'} label={'Number'} color={'orange'} isChecked={handleIsChecked} reset={reset}/>
                <Output password={password} placeholder={'Select Options...'} handleCopy={handleCopy}/>
                <Button type={'1'} title={'Generate Password'} onPress={() => {handlePasswordGeneration()}}/>
                <Button type={'2'} title={'Reset'} onPress={() => {handleReset()}}/>
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