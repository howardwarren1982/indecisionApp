"use strict";

// jsx - javascript xml

var book = {
  title: "Indecision",
  subtitle: "Some Info"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " ",
    book.title
  ),
  React.createElement(
    "p",
    null,
    book.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);
var count = 0;
var addOne = function addOne() {
  return count += 1;
};
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
