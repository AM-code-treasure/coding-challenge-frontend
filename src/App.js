import { useEffect, useState } from 'react';
import config from './config';
import { loadOrders, loadTargets } from './helpers/spreadsheet';

function App() {
  const [orders, setOrders] = useState([]);
  const [targets, setTargets] = useState([]);

  useEffect(() => {
    window.gapi.load('client', initClient);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initClient = async () => {
    await window.gapi.client.init({
      apiKey: config.apiKey,
      discoveryDocs: config.discoveryDocs,
    });
    loadOrders((data, error) => {
      setOrders(data || error);
    });
    loadTargets((data, error) => {
      setTargets(data || error);
    });
  };

  return (
    <div className="App">
      {/* NavBar */}
      <div>
        <p>Order Dashboard</p>
        <p>MONTH YEAR</p>
      </div>

      {/* Counter  */}
      <div>Refresh in SECONDS</div>

      {/* Total  */}

      <div>
        <p>TOTAL €</p>
      </div>

      {/* Progress bar */}
      <div>BAR</div>

      {/* Orders */}
      <div>
        <div>LEFT TABLE</div>
        <div>RIGHT TABLE</div>
      </div>

      <div id="group24">
        <div id="ellipse20"></div>
        <div id="ellipse21"></div>
        <div id="ellipse22"></div>
      </div>
    </div>
  );
}

export default App;
