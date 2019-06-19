import React from 'react';
import {Text,View} from 'react-native';


export const ShowResult = (props) => (
    <View style={{marginBottom:'70%'}}>
 <Text style={{ fontSize: 30,fontWeight: 'bold',textAlign: 'center'}}>Wow! Your reaction test result is : </Text>
 <Text style={{ fontSize: 40,fontWeight: 'bold',textAlign: 'center',display: 'flex'}}>{props.result}</Text>
 </View>
)



