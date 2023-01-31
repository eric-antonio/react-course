
// *Main Content 
function MainContent(){
    return(
        <div>
             <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>I want to become good in React</li>
                <li>React it's awesome </li>
                <li>React it's the best JS Frame Work </li>
                <li>I want to become good in React</li>
                <li>React it's awesome </li>
                <li>React it's the best JS Frame Work </li>
            </ol>

        </div>
    )
}

// * Footer Element 
function FooterEL(){
    return(
        <footer >
            <small className="footer-small">
                <a href="http://github.com/eric-antonio"> @2023 eric-antonio   </a> 
                Development. All rights reserved.
            </small>
            
        </footer>
    )
}

function PageComponent(){
    return (
        <di>
            {/* <HeaderEl/> */}
            <MainContent/>
            <FooterEL/>
        </di>
        
    )
}

// * This the way i can Apply components in to my page!
ReactDOM.render(<PageComponent/>, window.document.getElementById("root"))