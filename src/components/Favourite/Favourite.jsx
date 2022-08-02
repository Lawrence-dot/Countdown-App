import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../Container/App";
import Navbar from "../Layout/Navbar";
import "./Favourite.css";

function Favourite() {
  const [note, setNote] = useContext(NoteContext);
  var filt = [];

  note.map((note, index) => {
    note.fav === true && filt.push({ ...note, pos: index });
  });

  const deleteFav = (pos) => {
    let noteCopy = [...note];
    noteCopy[pos].fav = false;
    setNote(noteCopy);
  };

  return (
    <div>
      <Navbar title="Home" />
      <div className="container-m">
        <div className="container-m fav-body">
          <h1 className="text-center pointer my-3 font-bold favHead">
            My Favourites
          </h1>
          <div className="d-flex flex-row row justify-content-center mt-2">
            {filt.length > 0 ? (
              filt.map((note, index) => {
                return (
                  <div
                    className="col card col-12 col-sm-5 col-md-3 mx-2 my-2"
                    style={{ padding: "3px" }}
                  >
                    <div className="fav-card border-1" key={index}>
                      <div
                        className="row card-body pointer"
                        style={{ padding: "8px" }}
                      >
                        <div className="title d-flex flex-row">
                          <h4 className="col-11 card-title text-center ml-3 mb-3">
                            {" "}
                            {note.title}
                          </h4>
                          <span
                            className="cancel ms-auto text-red font-bold"
                            onClick={() => deleteFav(note.pos)}
                          >
                            x
                          </span>
                        </div>
                        <p className="note-text text-center">{note.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h4 className="text-center mt-4"> No Favourites </h4>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourite;
