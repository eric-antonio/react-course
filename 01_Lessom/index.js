function TemporaryName(){
    return(
        <div>
        <img id="image" src="react-logo.png" width="40px"></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>was originally created bj jordan walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>In maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile
                apps.
            </li>

        </ul>
    </div>

    )
}


ReactDOM.render(<TemporaryName/>,window.document.getElementById("root"))