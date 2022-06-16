import React from "react";
import { Paper, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "../Header";
import Footer from "../Footer";
import { theme, useStyles } from "./styles";
export default function MaterialLayout(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> <Header />
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
