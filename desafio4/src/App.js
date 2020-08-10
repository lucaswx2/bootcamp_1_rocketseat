import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
library.add(fas, faUserCircle);
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <Header></Header>
      <PostList></PostList>
    </>
  );
}
export default App;
