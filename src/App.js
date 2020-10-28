import './App.css';
import {useState} from 'react';

import bgStyle from './bg.modules.scss';
import BG_AB from './images/AB.png';
import BG_A from './images/A.png';
import BG_B from './images/B.png';
import BG_O from './images/O.png';
import Img1 from './images/img.png';

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
        <div className="bg" >
          <img className="bg-AB" src={BG_AB} ></img>
          <img className="bg-B" src={BG_B} ></img>
          <img className="bg-A" src={BG_A} ></img>
          <img className="bg-O" src={BG_O} ></img>
        </div>
        <div className="control" >
          <div className="control-main">
            <img style={{gridRowStart: 1, gridRowEnd: 3, width: '100%', }} src={Img1} ></img>
            <label style={{ 
              alignSelf:"end",
              justifySelf: "center",
              fontSize: "1.2rem",
            }} > 
               { QRtxt ? QRtxt : "กดปุ่มเพื่อไปหน้า" }
            </label>
            <label style={{
              fontWeight: "bold",
              fontSize: "1.3rem",
            }}  >  { QRtxt ? 'เลขที่' : "แสกนคิวอาร์โค้ด" } </label>
            <div  className="button-box button-scan" style={{
              ...(QRtxt ? {} : {
                gridColumnStart: 1,
                gridColumnEnd: 3,
              }),
              paddingTop: '0.5em',
              paddingBottom: '0.5em',
            }} >
              <Button  
                variant="contained" 
                onClick={scanQRCode} 
              >สกนคิว อาร์โค้ด</Button>
            </div>
            { QRtxt && (
              <div  className="button-box" >
                <Button 
                  variant="contained" 
                  color="primary" 
                  className="button-scan"
                  onClick={() => sendMessageButton(QRtxt)}> 
                  Send Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
