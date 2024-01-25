import { useState, useEffect } from "react";
import { Html5Qrcode, Html5QrcodeScanType, Html5QrcodeScanner } from "html5-qrcode"

function QrRead() {

  const [scan, setScan] = useState(null);

  useEffect(() => {
    function onScanSuccess(decodedText, decodedResult) {
      console.log(`Code matched = ${decodedText}`, decodedResult);
    }

    let config = {
      fps: 10,
      qrbox: { width: 400, height: 400 },
      rememberLastUsedCamera: true,
      supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA]
    };

    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader", config, false);
    html5QrcodeScanner.render(onScanSuccess);
  }, []);



  return (
    <div className='Qrcode'>
      <h1>Qr Scaner!</h1>
      {scan ? <div>success: {scan}</div> : <div id='reader'></div>}
    </div>
  );
};
export default QrRead;