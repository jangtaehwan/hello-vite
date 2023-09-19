import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("안녕하세요?")

  return (
    <>
      <h1>{text}</h1>
      <div className="card">
        <button onClick={() => setText((text) => text.concat("안녕하세요?"))}>
          HELLO?
        </button>
      </div>
    </>
  )
}

export default App
