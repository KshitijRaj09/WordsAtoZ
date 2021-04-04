import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Typography,
  InputBase,
  InputLabel,
  Select,
  Grid
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({}));

const NavBar = (props) => {
  const classes = useStyles();

  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("en");

  const inputChange = (event) => {
    setWord(event.target.value);
    console.log(event.target.value);
  };

  const dropDownHandler = (event) => {
    setLanguage(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.searchMeaning(word, language);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.grow}>
        <Grid container>
          <AppBar position="static">
            <Toolbar>
              <Grid item xs={12}>
                <Typography variant="h4" className={classes.title} noWrap>
                  WordsAtoZ
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="age-native-simple">Language</InputLabel>
                <Select
                  native
                  value={language}
                  onChange={dropDownHandler}
                  inputProps={{
                    name: "language",
                    id: "language-native-simple"
                  }}
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="ja">Japansese</option>
                  <option value="ru">Russian</option>
                  <option value="de">German</option>
                  <option value="it">Italian</option>
                  <option value="ko">Korean</option>
                  <option value="pt-BR">Brazilian Portuguese</option>
                  <option value="ar">Arabic</option>
                  <option value="tr">Turkish</option>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <div className={classes.search}>
                  <InputBase
                    placeholder="search Word"
                    value={word}
                    onInput={inputChange}
                    className={classes.inputInput}
                    startAdornment={<SearchIcon onClick={submitHandler} />}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
    </form>
  );
};

export default NavBar;
