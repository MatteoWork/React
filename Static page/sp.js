/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px

  const page = (
    <div>
        <img src ="react-logo.png" width="40px" alt="logo"/>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke3</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

*/

/*

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

    
function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src = "react-logo.png" width="40px"/>
                </nav>
            </header>
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Matteo development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

 */

/*
 
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"

function Header() {
    return (
        <header>
                <nav>
                    <img src = "react-logo.png" width="40px"/>
                </nav>
            </header>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
            <footer>
                <small>© 2021 Matteo development. All rights reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

*/

/*

Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.

function Header() {
    return (
        <header>
                <nav>
                    <img src = "react-logo.png" width="40px"/>
                </nav>
            </header>
    )
}

function Footer() {
    return(             
    <footer>
        <small>© 2021 Matteo development. All rights reserved.</small>
    </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer                    
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

*/

/*
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.

function Header() {
    return (
        <header>
                <nav className ="nav">
                    <img src = "react-logo.png" width="40px"/>
                    <ul className="nav-items"> 
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}

function Footer() {
    return(             
    <footer>
        <small>© 2021 Matteo development. All rights reserved.</small>
    </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer                    
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))

*/

/*
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
  */

  function Header() {
    return (
        <header>
                <nav className ="nav">
                    <img src = "react-logo.png" className="nav-logo"/>
                    <ul className="nav-items"> 
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}

function Footer() {
    return(             
    <footer>
        <small>© 2021 Matteo development. All rights reserved.</small>
    </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons i'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer                    
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))