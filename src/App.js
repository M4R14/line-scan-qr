import logo from './logo.svg';
import './App.css';

import liff from '@line/liff';

liff.init({ liffId: '1655180874-rpzb2gR5' });

const sendAlertIfNotInClient = () => { console.log('sendAlertIfNotInClient') }
const toggleQrCodeReader = () => { console.log('toggleQrCodeReader') }

const scanQRCode = () => {
  if (!liff.isInClient()) {
    sendAlertIfNotInClient();
  } else {
    if (liff.scanCode) {
        liff.scanCode().then(result => {
            // e.g. result = { value: "Hello LIFF app!" }
            const stringifiedResult = JSON.stringify(result);
            document.getElementById('scanQrField').textContent = stringifiedResult;
            toggleQrCodeReader();
        }).catch(err => {
            document.getElementById('scanQrField').textContent = "scanCode failed!";
        });
    }
  }
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <button onClick={scanQRCode} >Scan QR Code</button>
      <div id="scanQrField" ></div>
    </div>
  );
}

export default App;
