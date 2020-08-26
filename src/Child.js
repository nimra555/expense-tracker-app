import React from "react";
import Header from "./Header";
import Main from "./Main";

function Child() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

export default Child;
