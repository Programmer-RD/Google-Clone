import { Avatar, IconButton } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import React from "react";
import Search from "../components/Search";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div />
        <div className="home__header__right">
          <a href="https://mail.google.com/mail/?tab=wm&authuser=0&ogbl">
            Gmail
          </a>
          <a href="https://www.google.lk/imghp?hl=en&tab=wi&authuser=0&ogbl">
            Images
          </a>
          <a href="https://www.google.lk/intl/en/about/products?tab=wh">
            <IconButton>
              <Apps />
            </IconButton>
          </a>
          <a href="https://lh3.googleusercontent.com/ogw/ADGmqu-ilD5o89YmyCGApccim4zXTX-r0azMpWr340nSfA=s32-c-mo">
            <Avatar />
          </a>
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
