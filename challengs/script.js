function HeaderEl(){
    return (
        <na>
            <img src="react-logo.png" alt="React JS"  width="40px"/>
        </na>
    )
 }

function PageComponent(){
    return (
    <div>
        <ol>
            <li>I want to become good in React</li>
            <li>React it's awesome </li>
        </ol>
    </div>
    )
 }

function FooterEL(){
    return(
        <footer>
            <a href="http://github.com/eric-antonio">@eric-antonio</a> 
            development. All rights reserved.
        </footer>
    )
 }


// * This the way i can Apply components in to my page!
ReactDOM.render(<HeaderEl/>, window.document.getElementById("header"))
ReactDOM.render(<PageComponent/>, window.document.getElementById("main"))
ReactDOM.render(<FooterEL/>,  window.document.getElementById("footer"))