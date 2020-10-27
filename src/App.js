import './App.css';
import {useState} from 'react';

import Button from '@material-ui/core/Button';
import liff from '@line/liff';

liff.init({ 
  liffId: '1655180874-rpzb2gR5'
});

const sendAlertIfNotInClient = () => { console.log('sendAlertIfNotInClient') }
const toggleQrCodeReader = () => { console.log('toggleQrCodeReader') }

const sendMessageButton = (Message) => {
  if (!liff.isInClient()) {
    sendAlertIfNotInClient();
  } else {
      liff.sendMessages([{
          'type': 'text',
          'text': Message
      }]).then(function() {
        liff.closeWindow();
      }).catch(function(error) {
          window.alert('Error sending message: ' + error);
      });
  }
}

function App() {
  const [QRtxt, setQRtxt] = useState('');
  const [scanCount, setScanCount] = useState(0);

  const scanQRCode = () => {
    setScanCount(scanCount + 1)
    if (!liff.isInClient()) {
      sendAlertIfNotInClient();
    } else {
      if (liff.scanCode) {
          liff.scanCode().then(result => {
              // e.g. result = { value: "Hello LIFF app!" }
              const stringifiedResult = JSON.stringify(result);
              setQRtxt(result.value);
              // document.getElementById('scanQrField').textContent = stringifiedResult;
              toggleQrCodeReader();
          }).catch(err => {
              setQRtxt('')
              // document.getElementById('scanQrField').textContent = "scanCode failed!";
          });
      }
    }
  }

  return (
    <div className="App">
      <main>
        {/* <div id="scanQrField" ></div> */}
        <Button variant="contained"  onClick={scanQRCode} >Scan QR Code</Button>
        <h2 className="QRtxt" > {QRtxt} </h2>
        { QRtxt && (
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => sendMessageButton(QRtxt)}> 
            Send Message
          </Button>
        )}
      </main>
    </div>
  );
}

export default App;
