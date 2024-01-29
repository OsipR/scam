import { useState } from 'react';
import Ser from './new/Ser.js';
import QrRead from './Qrcode/Qrcode.js';
import Gen from './Qrcode/Qrcodegen.js';
import styles from './App.module.css';
import Gor from './goroscop/Goroscop.js';


function App() {

  const [code, setCode] = useState();
  const [codeScanner, setCodeScanner] = useState(111);
  const [userId, setUserId] = useState(123);

  const successCode = (data) =>{

    if(data.userId !== userId)
      return false;

    setCode(data.code);
    console.log(data.code);

    return true;
  } 

  if(code)
    return <div>{code}</div>;
  
  return (
    <div className={styles.App}>
      <Gen code={codeScanner} userId={123} name={"VOVOV"}/>
      <QrRead successCallback={successCode} cancelCallback={() => window.location.href = 'https:\\google.com'} updateCallback={() => setCodeScanner(codeScanner + 1)}/>
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
