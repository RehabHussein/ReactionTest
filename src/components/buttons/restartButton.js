import React from 'react';
import ButtonWrapper from './buttonWrapper';
import {RESTART_SCREEN } from '../../constants/routes';

export const RestartButton = (props) => (
  <ButtonWrapper title="Restart Test" onPress={() => toTestScreen(props.navigation)} />
)
const toTestScreen = (navigation) => (
  navigation.push(RESTART_SCREEN)
)

