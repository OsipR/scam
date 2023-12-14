import logo from './logo.svg';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {

  const [products, setProducts] = useState([{ id: 0, name: "FACLOK", price: 200 }, { id: 1, name: "FACLOK++", price: 20000 }, { id: 2, name: "VOVA", price: 2 }]);




 

  const shok = products.sort((a, b) => b.price - a.price ).map((product) => <div>
    <img src={logo} className={styles.App_logo} alt="logo" />
    <div>{product.name}</div>
    <div>{product.price}</div>
    <div></div>
  </div>);





  return (
    <div className={styles.App}>
      
      {shok}

    </div>


  );
}

export default App;
