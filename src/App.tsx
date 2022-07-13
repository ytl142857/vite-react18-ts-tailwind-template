import { Button } from 'antd';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/home';
import { MyCanvas } from './pages/my-canvas';

export const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Link to="canvas"> to canvas</Link>
      </div>
      <div>
        <Link to="/">to home</Link>
        <Button type="primary">to home</Button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="canvas" element={<MyCanvas />}></Route>
      </Routes>
    </>
  );
};
