import React, { useState } from 'react';
import './App.css';
import { Button } from 'antd';
import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { Body } from './component/Body'

const App = () => {
  return (
    <>
      <div className="App">
        <Header head = {'From class today ja'}/>
        <Body />
        <Footer x={'writen by Asst. Prof. Dr.WARODOM WERAPUN'}/>
      </div>
    </>
  )
}
export default App