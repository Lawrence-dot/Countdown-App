import React, { useContext, useEffect, useState, createContext } from "react";
import Form from "./Form";
import Notes from "./Notes";
import { NoteContext } from "../../Container/App";
import "../Home/Home.css";
export const HomeContext = createContext();

function Home() {
  const [show, setShow] = useState(false);
  const [note] = useContext(NoteContext);
  var date = new Date();
  var formCard = document.getElementById("formCard");
  var addToggler = document.getElementById("addToggler");

  window.onresize = function () {
    var size = window.innerWidth;
    if (formCard !== null) {
      size > 767.99 && (formCard.style.display = "block");
    }
  };

  useEffect(() => {
    if (addToggler !== null && formCard !== null) {
      if (show) {
        formCard.style.display = "block";
        addToggler.innerText = "x";
      } else {
        formCard.style.display = "none";
        addToggler.innerText = "+";
      }
    }
  }, [show]);

  const toggleAdd = () => {
    var size = window.innerWidth;
    size < 767.99 && setShow(!show);
  };

  return (
    <HomeContext.Provider value={toggleAdd}>
      {/* <div className="formModal bg-red">
        <Form />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="mobile-toggle">
            <button
              className="toggle-add btn-outline-success"
              onClick={toggleAdd}
            >
              <span className="addToggler" id="addToggler">
                +
              </span>
            </button>
          </div>
          <div className="col-sm-12 col-md-7 formCon">
            <Form />
          </div>
          <div className="col-sm-12 col-md-5">
            {note.length > 0 ? (
              note.map((note, index) => {
                var two = Date.parse(note.date);
                var three = date - two;
                var diff = Math.round(three / 1000);
                var type = "days";
                if (diff > 60) {
                  diff = Math.round(diff / 60);
                  if (diff > 1) {
                    type = "mins";
                  } else {
                    type = "min";
                  }
                } else if (diff > 3600) {
                  diff = Math.round(diff / 3600);
                  if (diff > 1) {
                    type = "hours";
                  } else {
                    type = "hour";
                  }
                } else if (diff > 86400) {
                  diff = Math.round(diff / 86400);
                  if (diff > 1) {
                    type = "days";
                  } else {
                    type = "day";
                  }
                } else {
                  if (diff > 1) {
                    type = "secs";
                  } else {
                    type = "sec";
                  }
                }
                return (
                  <Notes
                    title={note.title}
                    content={note.content}
                    pos={index}
                    fav={note.fav}
                    key={index}
                    time={diff}
                    type={type}
                  />
                );
              })
            ) : (
              <p className="text-center mt-2">No Saved Notes</p>
            )}
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
}

export default Home;
