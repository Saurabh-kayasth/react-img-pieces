import React from 'react'
import './App.css'
import { ImagePiece } from 'react-img-pieces'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImagePiece
          height={500}
          width={500}
          pieces={200}
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SE9RDpKMsDAs37MK2YCCFDOYF4cAA9wmyjEPkXTRykekmRUcmYX4hqD7PQgBl8bdFt0&usqp=CAU"
          animationDirection="alternate"
          animationDuration="1s"
          animationIterationCount="infinite"
        />
      </header>
    </div>
  )
}

export default App
