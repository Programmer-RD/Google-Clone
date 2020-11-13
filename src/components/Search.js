import { Button, IconButton } from "@material-ui/core";
import { Mic, SearchOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../contextapi/reducer";
import { useStateValue } from "../contextapi/StateProvider";
import "./Search.css";

function Search({ hidButtons = false }) {
  const [input, setInput] = useState("");
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const search = (event) => {
    event.preventDefault();
    setInput("");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
    console.log(history);
  };
  return (
    <form className="search">
      <div className="searchInput">
        <IconButton>
          <SearchOutlined className="search__inputIcon" />
        </IconButton>
        <input
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        <IconButton>
          <Mic />
        </IconButton>
      </div>
      {!hidButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <a href="https://www.google.com/doodles/">
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </a>
        </div>
      ) : (
        <div className="search__buttonsHidden">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <a href="https://www.google.com/doodles/">
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </a>
        </div>
      )}
    </form>
  );
}

export default Search;
