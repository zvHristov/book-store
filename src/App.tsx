import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router";
import NavigationTopBar from './components/NavigationTopBar';
import Books from './components/BooksPage';
import UserProfile from './components/UserProfilePage';
import './App.css'

const App: React.FC = () => {


  return (
    <div className="main-container">
      <BrowserRouter>
        <NavigationTopBar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/about" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
