import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Post'
import PostForm from './components/PostForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
        <Posts />
        <hr/>
      </header>
    </div>
  );
}

export default App;
