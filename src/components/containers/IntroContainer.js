import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { StartButton } from '../buttons/startButton';


const styles = StyleSheet.create({
  instHeader: {
    textAlign: 'center',
    color: '#055777',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '5%'
  },
  instContainer: {
    fontSize: 15,
    margin: '5%',
    padding: '5%',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#055777',
    borderRadius: 5,
    backgroundColor: '#f4f2ef',

  },
  inst: {
    marginTop: '2%',
  }
}
)

export const IntroContainer = (props) => (
  <View >
    <Text style={styles.instHeader}>Test Instructions:</Text>
    <View style={styles.instContainer}>
      <Text style={styles.inst}>1. Once ready tap on the "Start" button below</Text>
      <Text style={styles.inst}>2. The screen will turn to red , then few seconds later it will turn to green</Text>
      <Text style={styles.inst}>3. Once green, try to tap on the button on the screen as fast as you can, it is important to remember
            that if you tapped before the screen turns green then you failed the round</Text>
      <Text style={styles.inst}>4. After five successful rounds you will get your score !</Text>
    </View>
    <StartButton {...props} />
  </View>

)

