import React from 'react';
import Header from './Components/Header/Header';
// import PhotoEditor from './components/PhotoEditor';
import PhotoEditor from './Components/PhotoEditor/PhotoEditor';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header/>
      <PhotoEditor />
    </div>
  );
}

export default App;
