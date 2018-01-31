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
  Appear,
  Code,
  Layout,
  Fill,
  Image,
  Fit,
  CodePane
} from 'spectacle';

import Terminal from 'spectacle-terminal';

import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');

const theme = createTheme({
  primary: 'white',
  tertiary: 'black',
  quarternary: '#8bc34a'
}, {
  primary: { name: 'Open Sans', googleFont: true }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} progress="none" controls={false}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1}>
            JS + WebGL = ⚡️📱
          </Heading>
        </Slide>
        <Slide>
          <Terminal
            title={'@R1ZZU (zsh)'}
            showFirstEntry
            output={[
              "$ whoami",
              <div>Andrei</div>,
              <div>@r1zzu</div>,

              <div style={{ marginTop: '1em' }}>Me doez:</div>,
              <div> * Software Engineer at EPAM Systems</div>,
              <div> * @rollingscopes co-organzier & js trainer</div>,
              <div> * 21/23 (real-time muliplayer games for front-end geeks)</div>,
            ]}
          />
        </Slide>
        <Slide>
          <Heading>ISM</Heading>
          <Appear><ListItem textColor="primary">Render ALL seats</ListItem></Appear>
          <Appear><ListItem textColor="primary">Fast first paint</ListItem></Appear>
        </Slide>

        <Slide bgImage={require('../assets/ohio-stadium.jpg')} bgDarken={0.5}>
          <Layout>
            <Fill>
              <div hasSlideChildren style={{
                display: 'flex',
                height: '100%',
                alignItems: 'center',
              }}>
                <List>
                  <Appear><ListItem textColor="primary">100k+ seats</ListItem></Appear>
                  <Appear><ListItem textColor="primary">Size: 2.1M</ListItem></Appear>
                  <Appear><ListItem textColor="primary">Gzipped: 417kB</ListItem></Appear>
                </List>
              </div>
            </Fill>

            <Fill>
              <Appear><Image src={require('../assets/ohio-seatmap.png')} /></Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading>
            SSR to the rescue
          </Heading>

          <Appear>
            <Text margin="1em 0">Wait, it's not an html 🤔</Text>
          </Appear>
        </Slide>

        <Slide>
          <Image src={require('../assets/electron-logo.svg')} height={200} />
          <Appear><Text>📄 ➡️ ⚛️</Text></Appear>
          <Appear><Text>🖼</Text></Appear>
          <Appear><Text>️👍</Text></Appear>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image
                src={require('../assets/opengl-logo.png')}
                height={200}
              />
            </Fill>

            <Fill>
              <Appear>
                <Image
                  src={require('../assets/rust-logo.png')}
                  height={200}
                />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Image
            src={require('../assets/transparent.png')}
            height={400}
          />
        </Slide>
        <Slide>
          <Heading>Memory leak?</Heading>
          <Appear><Text margin="1em 0">Nope.</Text></Appear>
        </Slide>

        <Slide>
          <Heading>15 min 🕒</Heading>
        </Slide>

        <Slide>
          <Heading>x11 😴</Heading>
        </Slide>

        <Slide>
          <Heading>Stop and think</Heading>
        </Slide>

        <Slide>
          <CodePane lang="json" source={'{ "x": 932, "y": 6012 }, { "x": 930, "y": 6010 }'} textSize={'.9em'} />
          <Appear><CodePane lang="json" source={'[932, 6012, 930, 6010]'} textSize={'1em'} /></Appear>

          <List>
            <Appear><ListItem>Raw: 2.1M ➡️ 1M</ListItem></Appear>
            <Appear><ListItem>Gzipped: 417kB ➡️ 384kB</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <CodePane
            lang="json"
            source={'{ "x": 932, "y": 6012 }, { "x": 930, "y": 6010 }'}
            textSize={'.9em'}
          />
          <Appear>
            <CodePane
              lang="json"
              source={'[932, 6012, -2, -2, -2, -2, ... ]'}
              textSize={'1em'}
              margin="0 0 1em 0"
            />
          </Appear>

          <Appear><Text>Run-length encoding</Text></Appear>

          <List>
            <Appear><ListItem>Raw: 2.1M ➡️ 648kB</ListItem></Appear>
            <Appear><ListItem>Gzipped: 417kB ➡️ 24.2kB (x17 decrease 😱)</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading fit margin=".3em 0">Why gzip is working so much better?</Heading>

          <Layout>
            <Fill>
              <Image src={require('../assets/rows.png')} height={500} />
            </Fill>

            <Fill>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'center',
              }}>
                <Code textSize="1em">...,7,-5,7,-5,7,-5,7,-5,...</Code>
                <Appear>
                  <div>
                    <Text margin="1em 0">⬇️ gzip</Text>
                    <Code textSize="1em">...,N x (7, -5),...</Code>
                  </div>
                </Appear>
              </div>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading margin="0.3em 0">Pixi.js</Heading>

          <Appear><Text>Good, but not good enough</Text></Appear>
          <List>
            <Appear><ListItem textSize="0.8em">requires own rendering abstraction</ListItem></Appear>
            <Appear><ListItem textSize="0.8em">need to create a lot of objects (memory pressure)</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading fit textSize="0.8em" margin=".5em">Pixi.js vs Pure WebGL</Heading>
          <Text>Demo</Text>
        </Slide>

        <Slide>
          <Heading>Click detection</Heading>
        </Slide>

        <Slide>
          <Heading>Click detection</Heading>
        </Slide>

        <Slide>
          <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              width: 100,
              height: 100,
              background: 'rebeccapurple'
            }}/>
          </div>
        </Slide>

        <Slide>
          <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              width: 100,
              height: 100,
              background: 'rebeccapurple',
              borderRadius: '50%',
            }}/>
          </div>
        </Slide>

        <Slide>
          <Image src={require('../assets/rs-logo.svg')} />
        </Slide>

        <Slide>
          <Image src={require('../assets/rs-logo-inspect.png')} />
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image src={require('../assets/lion-king.png')} height={600}/>
            </Fill>

            <Fill>
              <Appear><Image src={require('../assets/lion-king-color-coded.png')} height={600}/></Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image src={require('../assets/ohio-seats.png')} height={600}/>
            </Fill>

            <Fill>
              <Appear><Image src={require('../assets/ohio-seats-color-coded.png')} height={600}/></Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Layout>
            <Fill>
              <Image src={require('../assets/ohio-seats-zoomed.png')} height={600}/>
            </Fill>

            <Fill>
              <Appear><Image src={require('../assets/ohio-seats-zoomed-color-coded.png')} height={600}/></Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide>
          <Heading>OOM 😵</Heading>
        </Slide>

        <Slide>
          <Text>https://webglfundamentals.org/</Text>
        </Slide>

        <Slide>
          <Heading>❓</Heading>
        </Slide>
      </Deck>
    );
  }
}
