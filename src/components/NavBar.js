import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Typography,
  InputBase,
  InputLabel,
  Select,
  Grid,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
  },
  appBarStyle: {
    backgroundColor: "#b67162",
    padding: "10px 0",
    marginBottom: "5px",
  },
  appBarMainGrid: {
    justifyContent: "center",
    alignContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
  },
  search: {
    position: "relative",
    borderRadius: "20px",
    backgroundColor: fade(theme.palette.common.white, 0.35),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginTop: "5px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
  },
  inputInput: {
    width: "70%",
    paddingLeft: "7px",
    color: "#fff",
    "&:hover": {
      width: "100%",
      color: "#464f41",
      backgroundColor: "#f7f3e9",
      borderRadius: "20px",
    },
  },
  SearchIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  selectField: {
    borderRadius: "5px",
    border: "solid 1px #f7f3e9",
    paddingLeft: "5px",
    color: "#53354a",
    width: "100%",
  },
}));

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
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBarStyle}>
          <Toolbar>
            <Grid container className={classes.appBarMainGrid}>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" className={classes.title} noWrap>
                  WordsAtoZ
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="age-native-simple">Language</InputLabel>
                <Select
                  native
                  value={language}
                  onChange={dropDownHandler}
                  inputProps={{
                    name: "language",
                    id: "language-native-simple",
                  }}
                  className={classes.selectField}
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
                    startAdornment={
                      <SearchIcon
                        onClick={submitHandler}
                        className={classes.SearchIcon}
                      />
                    }
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    </form>
  );
};

export default NavBar;
