import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'

const NoteContainer = ({notes, deleteNote, updateText}) => {


  


    return (
        <div className="note_container">
            <h2>Notes</h2>
            <div className="note_container_notes">
                {
                        
                        notes.map((item) => (<Note key={item.id} note={item} deleteNote={deleteNote} updateText={updateText} />))

                }

            </div>
        </div>
    )
}

export default NoteContainer
