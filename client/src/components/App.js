import React from 'react';
import Navigation from "./Navigation/Navigation";
import { Global } from "@emotion/core";
import { globalStyles } from "../styles";
import { Switch, Route } from "react-router-dom";
import { Post } from "./Posts/Post";
import { UserPanel } from "./UserPanel/UserPanel";


const App = () => {
  return (
      <>
        <Global styles={globalStyles}/>
        <Navigation/>
        <Switch>
            <Route path="/posts">
                <Post/>
            </Route>
            <Route path="/user">
                <UserPanel/>
            </Route>
            <Route path="/">

            </Route>
        </Switch>
      </>
  );
}

export default App;
