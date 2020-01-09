import React from "react";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Rooms from "./pages/Rooms/Rooms";
import SingleRoom from "./pages/SingleRoom/SingleRoom";
import NotFound from "./pages/NotFound/NotFound";

// import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:room" component={SingleRoom} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
