import React, { Component } from 'react';
import { TEST_SCREEN } from '../constants/routes';

import ProgressBar from '../components/progressBar';

class RestartScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<ProgressBar />);
    }
    componentDidMount() {
        toTestScreen(this.props.navigation);
    }
    componentDidUpdate() {
        toTestScreen(this.props.navigation);
    }

}
const toTestScreen = (navigation) => (
    navigation.push(TEST_SCREEN)
)
export default RestartScreen;
