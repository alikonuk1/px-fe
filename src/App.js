import TradingViewWidget, { Themes }  from './tvwidget';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TradingViewWidget
        symbol="INDEX:ETHUSD"
        theme={Themes.DARK}
        /* locale="fr" */
        /* autosize */
      />
      </header>
    </div>
  );
}

export default App;
