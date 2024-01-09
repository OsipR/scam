import styles from './ser.module.css';
import { useEffect, useState } from 'react';

function ser() {
   
    async function getResponse(){
    let response = await fetch('http://localhost:3000')
    let content = await response.json()
    console.log(content)
    }
    getResponse()
    
};
export default ser;