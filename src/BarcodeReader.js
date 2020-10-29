import React from 'react';
import Quagga from 'quagga'; // ES6

export default class BarcodeReader extends React.Component {
    constructor(props) {
        super(props)
        this.id = "BarcodeReader__asdasd"
    }

    componentDidMount(){
        Quagga.init({
            inputStream : {
              name : "Live",
              type : "LiveStream",
              target: document.querySelector(`#${this.id}`)    // Or '#yourElement' (optional)
            },
            decoder : {
              readers : ["code_128_reader"]
            }
          }, function(err) {
              if (err) {
                  console.log(err);
                  return
              }
              console.log("Initialization finished. Ready to start");
              Quagga.start();
          });
    }

    render() {
        return (
            <div style={{
                gridColumnStart:1, 
                gridColumnEnd: 3,
            }} >
                <div id={this.id}
                    style={{ 
                        width: '100%',
                        height: "200px"
                    }} 
                ></div>
            </div>
        )
    }
}