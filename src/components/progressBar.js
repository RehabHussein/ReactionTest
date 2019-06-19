import React from 'react';
import {ProgressBarAndroid, Platform} from 'react-native';

const ProgressBar =(props)=>{
    
       if( Platform.OS === 'ios' )
        return <ProgressViewIOS style={{marginTop:'50%',color:'#60bcf4'}}/>
        else 
        return  <ProgressBarAndroid style={{marginTop:'50%',color:'#60bcf4'}}/>

}
export default ProgressBar;