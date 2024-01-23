import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

function Gen (props){
    
    const  { userName, userId, code} = props
    

    


    return(
        <div>
      <h2>Имя пользователя: {userName}</h2>
      <QRCode value={JSON.stringify(props)} />
    </div>
    )




};
export default Gen;