import React from 'react';
import './App.css';

import Listing from './components/Listing';
import etsy from './data/etsy.json';

function App() {

  // JSON.parse(etsy);
  console.log(etsy);

  return (
    <Listing items={etsy} />
  )

}

export default App;
