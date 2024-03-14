// ReactDOM.createRoot(document.getElementById("root").render(navbar))  REACT 18

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page =  (
    <div>
        <h1>My website</h1>
        <h3>Reasons</h3>
        <ol>
            <li>Composable</li>
            <li>Declerative</li>
            <li>Something else</li>
            <li>Something else x2</li>
        </ol>
    </div>
)

// document.getElementById("root").append(page)  Objects Objects
// document.getElementById("root").append(JSON.stringify(page)) Object things

ReactDOM.render(page,document.getElementById("root"))