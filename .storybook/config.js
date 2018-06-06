import { configure } from '@storybook/react';
import { storiesOf } from '@storybook/react';
import Home from '../src/Home';
import React from 'react';

function loadStories() {
  
  // You can require as many stories as you need.

  

storiesOf('HomeView', module)
  .add('default', () => (
    <Home/>
  ))


}

configure(loadStories, module);