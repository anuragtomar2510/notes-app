import React, {useState, useEffect} from 'react'

import NoteContainer from './components/NoteContainer/NoteContainer'
import Sidebar from './components/Sidebar/Sidebar'

import './App.css';

function App() {

  const [notes, setNotes] = useState( JSON.parse(localStorage.getItem("notes-app")) || [] )

  useEffect(() => {

    localStorage.setItem("notes-app", JSON.stringify(notes))

  }, [notes])

  const addNote = (color) => {

    const newArr = [...notes]

    newArr.unshift({
      
      id : Date.now() + "" + Math.floor(Math.random * 78),
      text : "",
      time : Date.now(),
      color

    })

    setNotes(newArr)

  }

  const deleteNote = (id) => {

    let newArr = [...notes]

    newArr = newArr.filter((note) => note.id !== id)

    setNotes(newArr)

  }

  const updateText = (text, id) => {
    
    const newArr = [...notes]

    const index = newArr.findIndex((item) => item.id === id)

    if (index < 0) return

    newArr[index].text = text

    setNotes(newArr)

  }

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer notes={notes}  deleteNote={deleteNote} updateText={updateText} />
    </div>  );
}

export default App;
