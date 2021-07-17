// jsx - javascript xml

var book = {
  title: "Indecision",
  subtitle: "Some Info",
};

const template = (
  <div>
    <h1> {book.title}</h1>
    <p>{book.subtitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);
let count = 0;
const addOne = () => {
  return (count += 1);
};
const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
