import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {ShowResult} from '../showResult';
import {RestartButton} from '../buttons/restartButton';


 const ShowResultContainer =(props) => (
  <View style={{marginTop:'30%'}}>
       <ShowResult {...props}/>
       <RestartButton  {...props} />
       </View>
       
 )

export default ShowResultContainer;
