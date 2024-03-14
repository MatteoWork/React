/*  FIRST

Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root

// This is imperative way

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

*/

/* SECOND

//This is imperative way

const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)

const element = <h1 className ="header">This is JSX</h1>;
console.log(element);

{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {
        className: "header", 
        children: "This is JSX"
    }, 
    _owner: null, 
    _store: {}
}


ReactDOM.render(element, document.getElementById("root"))  

*/

/* THIRD

ReactDOM.render(
    <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
    </div>,
    document.getElementById("root")
)

*/

 FOURTH

const page = (
<div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
</div>
)

ReactDOM.render(page,document.getElementById("root")
)