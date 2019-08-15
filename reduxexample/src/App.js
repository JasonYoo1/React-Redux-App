import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './components/Post'
import PostForm from './components/PostForm'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <PostForm />
        <Posts />
        <hr/>
      </header>
    </div>
    </Provider>
  );
}

export default App;
