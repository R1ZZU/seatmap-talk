import React from 'react';

import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme({
  primary: 'white',
  tertiary: 'black'
}, {
  primary: { name: 'Open Sans', googleFont: true }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            JS + WebGL = ⚡️📱
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
