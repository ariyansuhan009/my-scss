import React,{createContext, useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

export const CategoryContext = createContext();


function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <div className="App">
        <CategoryContext.Provider value={[category, setCategory]}>
          <p>Count Value: {category}</p>
          <Header />
          <Home />
          <Shipment/>
        </CategoryContext.Provider>
    </div>
  );
}

export default App;
