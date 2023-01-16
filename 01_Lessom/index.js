function Car(){
    return <h2>I'm Learning Recat Js!</h2>
}

const root1 =  ReactDOM.createRoot(window.document.getElementById('root1'))
root1.render(<Car/>)
// ! There is another way 

ReactDOM.render(
    <div>
        <Car/>
    </div>,

   window.document.getElementById('root')
)
