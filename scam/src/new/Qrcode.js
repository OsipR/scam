import { useState, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

function Qr () {

const [scan, setScan] = useState(null);

useEffect (() => {
    const scaner = Html5Qrcode( 'reader', {
        qrbox: {width: 250, height: 250}, fps: 10
    });
    
    scaner.render(success, error);
    
    function success(result) {
        scaner.clear();
        setScan(result);
    }
    
    function error(err) {
        console.warn(err)
    }
},[]);


return (
<div className = 'Qrcode'>
    <h1>Qr Scaner!</h1>
    { scan ? <div>success: {scan}</div> : <div id = 'reader'></div>}
</div>
);
};
export default Qr;