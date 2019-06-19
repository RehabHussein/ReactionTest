import React, { Component } from 'react';
import { TestContainer } from '../components/containers/TestContainer';
import ShowResultContainer from '../components/containers/ShowResultContainer';
import ProgressBar from '../components/progressBar';


class TestScreen extends Component {

  getRandomNumber() {
    fetch('https://api.random.org/json-rpc/2/invoke', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: '{"jsonrpc":"2.0","method":"generateIntegers","params":{"apiKey":"b7a7905e-eeaa-463e-ae44-6569b69fbfc6","n":10,"min":1000,"max":6000,"replacement":true}, "id":42}'
    }).then(r => r.json())
      .then(result => {
        this.setState({ timeWaited: result.result.random.data, timeFetched: true });
      })
      .catch(err => console.error(err));
  }

  constructor(props) {
    super(props);
    this.state = {
      timeWaited: [0],
      timeFetched: false,
      successfulRounds: 0,
      index: 0,
      result: 0
    }
    this.updateRounds = this.updateRounds.bind(this);
    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.getRandomNumber();

  }
  updateRounds(roundResult) {
    (this.state.index===9) ?  this.setState({ index: (this.state.index) + 1 }) : this.setState({ index: 0});
    if (roundResult >= 0) {
      this.setState({ successfulRounds: (this.state.successfulRounds) + 1, result: (this.state.result) + roundResult });
    }
  }
  componentWillUnmount() {
    this.setState({ timeFetched: false });
  }
  render() {
    if (this.state.successfulRounds < 5) {
      if (this.state.timeFetched)
        return (
          <TestContainer wait={this.state.timeWaited[this.state.index]} updateRounds={this.updateRounds} />
        );
      return (<ProgressBar />);
    }
    else {
      return (<ShowResultContainer navigation={this.props.navigation} result={((this.state.result) / 5).toFixed(3)} />);
    }
  }
}

export default TestScreen;