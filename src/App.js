import TradingViewWidget, { Themes }  from './tvwidget';
import './App.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <flex >
      <TradingViewWidget
        symbol="INDEX:ETHUSD"
        theme={Themes.LIGHT}
        /* locale="fr" */
        /* autosize */
        />
      </flex>
    </div>
  );
}

export default App;
