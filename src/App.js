import './CSS/App.css';
import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import SwipeButtons from "./components/SwipeButtons"


export default function App() {
  return (
    <div className='app'>
      <Header />
      <Card />
      <SwipeButtons/>
    </div>
  );
}

