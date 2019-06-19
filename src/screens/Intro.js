import React, { Component } from 'react';
import * as Routes from '../constants/routes';
import {
  IntroContainer
} from '../components/containers/IntroContainer';

 class IntroScreen extends Component {
  render() {
    return (
      <IntroContainer navigation={this.props.navigation}/>
    );
  }
}

export default IntroScreen;