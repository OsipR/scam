import Ser from './new/Ser.js';
import QrRead from './Qrcode/Qrcode.js';
import Gen from './Qrcode/Qrcodegen.js';


function App() {

  const userData = {
    userName: "Vova",
    userId: 1,
    code: 12342,
  };

  

  return (
    <div>
      <QrRead />
    </div>
    );
  // return (
  // <div>
  //   <Gen name={userData.userName} userId={userData.userId} code={userData.code}/>
  //   <QrRead />
  // </div>
  // );
};

export default App;
