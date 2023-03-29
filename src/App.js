import TradingViewWidget, { Themes }  from './tvwidget';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import AppCard from './AppCard';
import Footer from './Footer';
import {
  ChakraProvider,
  Flex,
  VStack,
  Grid,
  extendTheme
} from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Deposit from './Deposit';
import Liquidity from './Liquidity';

const modifiedTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: props.colorMode === 'dark' ? 'black' : 'white',
      },
    }),
  },
  shadows: {
    whiteShadow: '0px 30px 90px rgba(255, 255, 255, 0.12)',
  },
});

function App() {
  return (
    <ChakraProvider theme={modifiedTheme}>
    <div className="App">
      <Header/>
{/*       <Router>
        <Routes>
          <Route exact path="/"/>
          <Route path="/Deposit" component={Deposit} />
          <Route path="/Liquidity" component={Liquidity} />
          </Routes>
          </Router> */}
            <Flex >
{/*               <Liquidity/>
              <Deposit/> */}
{/*             <TradingViewWidget
              symbol="INDEX:ETHUSD"
              theme={Themes.DARK}
              width="300px"
              /> */}
              {/* <Hero/> */}
              <AppCard/>
            </Flex>
    <Footer/>
    </div>
    </ChakraProvider>
  );
}

export default App;
