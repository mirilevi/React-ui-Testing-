import React from 'react';
import './App.css';
import ShowProducts from './ShowProducts';

function App() {
  let c= "girl";

  return (
    <div className="App">
      <ShowProducts category={c}></ShowProducts>
    </div>
  );
}

export default App;
