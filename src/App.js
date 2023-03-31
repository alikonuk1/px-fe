import './App.css';
import Header from './Header';
import AppCard from './AppCard';
import Footer from './Footer';
import {
  ChakraProvider,
  Flex,
  extendTheme
} from '@chakra-ui/react';

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
        <Flex >
          <AppCard/>
        </Flex>
        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
