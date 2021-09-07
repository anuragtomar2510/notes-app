import React, {useState} from 'react'
import plusIcon from '../../images/plus.png'
import './Sidebar.css'

const Sidebar = ({addNote}) => {

    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91", "#09e042", "#e3f707",  "#bbdbad", "#F6D8D8", "#07f7b3"];

    const [listOpen, setListOpen] = useState(false)


    return (
        <div className="sidebar">
            <img src={plusIcon} alt="Add"  onClick={() => setListOpen(!listOpen)}/>
            <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`} >

                {

                    colors.map((item, index) => (

                        <li
                            key={index}
                            className="sidebar_list_item"
                            style={{backgroundColor : item}}
                            onClick={() => addNote(item)}
                        
                        />
                    ))

                }


            </ul>
        </div>
    )
}

export default Sidebar
