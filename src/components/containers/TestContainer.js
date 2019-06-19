import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {ReactionButton} from '../buttons/reactionButton';

export class TestContainer extends React.Component {
    constructor(props){
        super(props);
    this.state = {
        roundStatus: 'started',
        startTime: new Date()
    }
}
    
    componentWillUnmount(){
           clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
           this.setState({
            roundStatus: 'started'
         });   
        }
        componentDidMount(){
         this.timeoutHandle = setTimeout(()=>{
             this.setState({
                roundStatus: 'completed',
                startTime: new Date()
             });
            
       }, this.props.wait);
    }
    componentWillReceiveProps(){
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
           this.setState({
            roundStatus: 'started'
         });   
    }
  componentDidUpdate(){
      if (this.state.roundStatus==='started')
    this.timeoutHandle = setTimeout(()=>{
        this.setState({
           roundStatus: 'completed',
           startTime: new Date()
        });
       
  }, this.props.wait);
}
    render() {
      
        if (this.state.roundStatus === 'started')
            return (
                <View style={{ backgroundColor: 'red', flex: 1 }}>
                    <View style={{marginTop:'50%'}}>
                    <ReactionButton onPress={ () =>{this.props.updateRounds(-1) }}/>
                    </View>
                </View>
            );
        else return (
        <View style={{ backgroundColor: 'green', flex: 1 }}> 
        <View style={{marginTop:'50%'}}>
          <ReactionButton onPress={ () =>{this.props.updateRounds((new Date()- this.state.startTime  )/ 1000) }}/> 
          </View>
         </View>
         );
    }
}


