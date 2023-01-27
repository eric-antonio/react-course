// * Header Content 
function HeaderEl(){
    return (
        <header>
            <na className="nav">
                <img src="react-logo.png" alt="React JS"  className="img-logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
               
            </na>

        </header>
       
    )
}




// * Footer Element 
function FooterEL(){
    return(
        <footer>
            <small>
                <a href="http://github.com/eric-antonio">@2023 eric-antonio</a>
                development. All rights reserved.
            </small>
            
        </footer>
    )
}

function PageComponent(){
    return (
        <di>
            <HeaderEl/>
            <MainContent/>
            <FooterEL/>
        </di>
        
    )
}


// * This the way i can Apply components in to my page!
ReactDOM.render(<PageComponent/>, window.document.getElementById("root"))