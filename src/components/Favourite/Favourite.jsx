import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../Container/App";
import Notes from "../Home/Notes";
import "./Favourite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function Favourite() {
  var spinner = document.getElementById("spinner");
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useContext(NoteContext);
  const filt = note.filter((note) => {
    return note.fav === true;
  });

  setTimeout(() => {
    if (spinner) {
      spinner.style.display = "none";
    }
  }, 1000);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="container">
      <div className="App">
        <div className="containers-fav" id="spinner">
          <div className="loading">
            <span>
              <FontAwesomeIcon icon={faBook} />
            </span>
          </div>
        </div>
      </div>

      {!loading && (
        <div className="container fav-body mx-1">
          <h3 className="text-center mt-3 text-bold">My Favourites</h3>
          {filt.length > 0 ? (
            filt.map((note, index) => {
              return (
                <div className="card border-1 mt-4" key={index}>
                  <div className="row card-body">
                    <h3 className="card-title text-center mb-3">
                      {" "}
                      {note.title}
                    </h3>
                    <p className="note-text text-center">{note.content}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center"> No Favourites </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Favourite;
