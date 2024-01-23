import Ser from './new/Ser.js';
import Qr from './Qrcode/Qrcode.js';
import Gen from './Qrcode/Qrcodegen.js';


function App() {

  const userData = {
    userName: "name",
    userId: 1,
    code: 12342,
  };
  
  return <Gen userData = {userData}/>;
};

export default App;
