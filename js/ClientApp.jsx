import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

const MyTitle = function (props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function () {
  return (
    <div id="my-first-component">
      <MyTitle title="game of thrones" color="orange" />
      <MyTitle title="game of thrones" color="orange" />
      <MyTitle title="game of thrones" color="orange" />
      <MyTitle title="game of thrones" color="orange" />
    </div>
  );
};

render(ce(MyFirstComponent), document.getElementById("app"));
