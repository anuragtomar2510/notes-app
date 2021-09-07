import React from 'react'
import './Note.css'
import deleteIcon from '../../images/delete.svg'

let timer = 500, timeout;
const Note = ({note, deleteNote, updateText}) => {

    const formatDate = (value) => {
        if (!value) return ""
    
        const date = new Date(value);
        const monthNames = [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ]
    
        let hrs = date.getHours()
        
    
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min
    
        let day = date.getDate()
        const month = monthNames[date.getMonth()]
        let year = date.getFullYear()
    
        return `${hrs}:${min} ${day} ${month} ${year}`
      }

      const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
      };
    
      const updateNote = (text, id) => {
        debounce(() => updateText(text, id));
      };

    
    return (
        <div className="note" style={{backgroundColor : note.color}}>
            <textarea className="note_text"  onChange={(e) => updateNote(e.target.value, note.id)} defaultValue={note.text} placeholder="Write your note here..." />
            <div className="note_footer">
                <p>{formatDate(note.time)}</p>
                <img src={deleteIcon} alt="delete" onClick={() => deleteNote(note.id)} />
            </div>
        </div>
    )
}

export default Note
