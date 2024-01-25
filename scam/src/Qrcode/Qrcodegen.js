import { useState, useEffect } from "react";
import QRCode from "react-qr-code";

function Gen(props) {

  const { name, userId, code } = props;

  return (
    <div>
      <h2>{name}</h2>
      <QRCode value={JSON.stringify({ userId: userId, code:code})} />
    </div>
  )




};
export default Gen;