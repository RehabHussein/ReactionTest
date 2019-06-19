import React from 'react';

import ButtonWrapper from './buttonWrapper';
import { TEST_SCREEN } from '../../constants/routes';

export const StartButton = (props) => (
  <ButtonWrapper title="Start Now!" onPress={() => toTestScreen(props.navigation)}/>
)

const toTestScreen = (navigation) => (
  navigation.navigate(TEST_SCREEN)
)

