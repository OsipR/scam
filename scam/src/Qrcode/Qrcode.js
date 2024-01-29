import { useState, useEffect } from "react";
import { Html5Qrcode, Html5QrcodeScanType, Html5QrcodeScanner } from "html5-qrcode"

function QrRead(props) {

  const { successCallback, cancelCallback, updateCallback } = props;

  const [scan, setScan] = useState();
  const [isField, setIsField] = useState(false);

  const BarcodeScannerPluginRework = () => {
    let html5QrCode;
    const qrcodeId = 'reader';
    
    useEffect(() => {
        // Anything in here is fired on component mount.
        if(!html5QrCode?.getState()){
            html5QrCode = new Html5Qrcode(qrcodeId);
            const qrCodeSuccessCallback = (decodedText, decodedResult) => {
              
              if (successCallback(JSON.parse(decodedText))){
                html5QrCode.pause();
                html5QrCode.clear();
              }
              else console.log('lox');
            };
            const config = { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.777778};

            // If you want to prefer back camera
            html5QrCode.start(
                { facingMode: "environment" },
                config,
                qrCodeSuccessCallback
            );
        }

        return () => {
            // Anything in here is fired on component unmount.

        };
    }, []);

    return <div id={qrcodeId}></div>;
};

const Field = () => {

  const [text, setText] = useState('');

  return <div>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    <button onClick={() => successCallback({ userId: 123, code: text })}>send</button>
  </div>
  
}

  return (
    <div className='Qrcode'>
      <h1>Qr Scaner!</h1>
      {
        isField ?
        <Field/>:
      <BarcodeScannerPluginRework/>
      }
      <div>
        <button onClick={cancelCallback}>cancel</button>
        <button onClick={updateCallback}>update</button>
        <button onClick={() => setIsField(!isField)}>input field</button>
      </div>
    </div>
  );
};
export default QrRead;