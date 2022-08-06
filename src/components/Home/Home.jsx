import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  useRef,
} from "react";
import Form from "./Form";
import Notes from "./Notes";
import { NoteContext } from "../../Container/App";
import "../Home/Home.css";
import Navbar from "../Layout/Navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const HomeContext = createContext();

function Home() {
  const [show, setShow] = useState(false);
  const [note] = useContext(NoteContext);
  const [searching, setSearching] = useState(false);
  const searchRef = useRef();
  const [matches, setMatches] = useState([]);
  var date = new Date();
  var formCard = document.getElementById("formCard");
  var addToggler = document.getElementById("addToggler");

  window.onresize = function () {
    var size = window.innerWidth;
    if (formCard !== null) {
      size > 767.99 && (formCard.style.display = "block");
    }
  };

  setInterval(() => {
    date = new Date();
  }, 1000);

  useEffect(() => {
    if (addToggler !== null && formCard !== null) {
      show
        ? (formCard.style.display = "block")((addToggler.innerText = "-"))
        : (formCard.style.display = "none")((addToggler.innerText = "+"));
    }
  }, [show]);

  const toggleAdd = () => {
    window.innerWidth < 767.99 && setShow(!show);
  };

  const noteList =
    note.length > 0 ? (
      note.map((note, index) => {
        var two = Date.parse(note.date);
        var three = date - two;
        var diff = Math.round(three / 1000);
        var type = "days";
        if (diff > 60 && diff < 3601) {
          diff = Math.round(diff / 60);
          diff > 1 ? (type = "mins") : (type = "min");
        } else if (diff > 3601 && diff < 86400) {
          diff = Math.round(diff / 3600);
          diff > 1 ? (type = "hours") : (type = "hour");
        } else if (diff > 86400 && diff < 2592000) {
          diff = Math.round(diff / 86400);
          diff > 1 ? (type = "days") : (type = "day");
        } else if (diff > 2592000) {
          diff = Math.round(diff / 86400);
          diff > 1 ? (type = "Months") : (type = "Month");
        } else {
          diff > 1 ? (type = "secs") : (type = "sec");
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
    );

  const matchList =
    matches.length > 0 ? (
      matches.map((note, index) => {
        var two = Date.parse(note.date);
        var three = date - two;
        var diff = Math.round(three / 1000);
        var type = "days";
        if (diff > 60 && diff < 3601) {
          diff = Math.round(diff / 60);
          diff > 1 ? (type = "mins") : (type = "min");
        } else if (diff > 3601 && diff < 86400) {
          diff = Math.round(diff / 3600);
          diff > 1 ? (type = "hours") : (type = "hour");
        } else if (diff > 86400 && diff < 2592000) {
          diff = Math.round(diff / 86400);
          diff > 1 ? (type = "days") : (type = "day");
        } else if (diff > 2592000) {
          diff = Math.round(diff / 86400);
          diff > 1 ? (type = "Months") : (type = "Month");
        } else {
          diff > 1 ? (type = "secs") : (type = "sec");
        }

        return (
          <Notes
            two={Date.parse(note.date)}
            three={date - two}
            diff={Math.round(three / 1000)}
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
      <p className="text-center mt-2">No Notes Found </p>
    );

  const searchHandler = () => {
    var text = searchRef.current.value.toLowerCase();
    setSearching(text.length > 0 ? true : false);
    let match = note.filter((note) => {
      return (
        note.title.toLowerCase().includes(text) ||
        note.content.toLowerCase().includes(text)
      );
    });
    setMatches(match);
  };

  return (
    <HomeContext.Provider value={toggleAdd}>
      <Navbar title="NotePad" />
      <div className="container-main">
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

          <div className="col-sm-12 col-md-6 d-flex justify-content-center formCon">
            <Form />
          </div>

          <div className="col-sm-12 col-md-6 container-m">
            <div className="noteSearcher mt-4 d-flex justify-content-center">
              <input
                className="w-50  border-0 border-bottom"
                type="text"
                name=""
                id=""
                onChange={searchHandler}
                ref={searchRef}
                required="\S+"
                placeholder="Search Notes.........."
              />
              <span className="search" fill="green">
                <FontAwesomeIcon icon={faSearch} color="green" />
              </span>
            </div>

            <div className="row d-flex container-n justify-content-center">
              {searching == true ? matchList : noteList}
            </div>
          </div>
        </div>
      </div>
    </HomeContext.Provider>
  );
}

export default Home;
