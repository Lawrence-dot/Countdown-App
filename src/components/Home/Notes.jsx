import React, { useState, useContext, createContext, useEffect } from "react";
import { NoteContext } from "../../Container/App";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export const EditContext = createContext();
function Notes(props) {
  const [note, setNote, edit, setEdit] = useContext(NoteContext);
  const [timeD, SettimeD] = useState([]);
  const [colorFav, setcolorFav] = useState(false);
  var date = new Date();
  var thisTime = props.time;

  const setList = () => {
    localStorage.setItem("note", JSON.stringify(note));
  };

  const toggleFav = (pos) => {
    if (colorFav === false) {
      note[pos].fav = true;
    } else {
      note[pos].fav = false;
    }

    setNote([...note]);
    setList();

    setcolorFav(!colorFav);
    console.log(note);
  };

  const deleteHandler = (pos) => {
    if (note.length > 1) {
      var spliced = note.splice(pos, 1);
      setNote(spliced);
    } else {
      setNote([]);
      localStorage.clear();
    }

    setList();
  };

  const editHandler = (pos) => {
    console.log(note.at(pos));
    setEdit([note.at(pos), pos]);
  };

  useEffect(() => {
    date = new Date();
    note.map((note, index) => {
      var two = Date.parse(note.date);
      var three = date - two;
      var diff = Math.round(three / 1000);
      var type;
      if (diff > 60) {
        diff = Math.round(diff / 60);
        type = "mins";
      } else if (diff > 3600) {
        diff = Math.round(diff / 3600);
        type = "hours";
      } else if (diff > 86400) {
        diff = Math.round(diff / 86400);
        type = "days";
      } else {
        type = "secs";
      }
      SettimeD([...timeD, note.diff]);
    });
  }, []);

  return (
    <EditContext.Provider value={edit}>
      <div className="card notes-card border-1 col-12 col-sm-5 col-md-12 mx-1 mt-4">
        <div className="favicons d-flex justify-content-end">
          <span
            className={
              props.fav ? "red fav-icon mx-1" : "fav-white fav-icon mx-1"
            }
            onClick={() => toggleFav(props.pos)}
          >
            <FontAwesomeIcon icon={faHeart} />
          </span>
        </div>
        <div className="row card-body py-0 my-1">
          <h3 className="card-title text-center mb-2 font-bold">
            {" "}
            {props.title}
          </h3>
          <p className="note-text text-center">{props.content}</p>
          <p className="timeStand text-center">
            {props.time > 60
              ? Math.round(props.time / 60)
              : props.time > 1440
              ? Math.round(props.time / 1440)
              : props.time}{" "}
            {props.time > 60
              ? "hours"
              : props.time > 1440
              ? "days"
              : props.type}{" "}
            ago
          </p>
        </div>
        <div className="alter d-flex justify-content-center mb-2">
          <NavLink
            className="btn btn-outline-success mx-2"
            to="/edit"
            onClick={() => editHandler(props.pos)}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </NavLink>
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteHandler(props.pos)}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </EditContext.Provider>
  );
}

export default Notes;
