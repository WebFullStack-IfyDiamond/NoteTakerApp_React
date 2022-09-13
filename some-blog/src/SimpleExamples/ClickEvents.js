
const ClickEvents = () => {

    const handleClick = () =>{
        console.log("Hello");
    }

    const handleNextClick =(name) => {
        console.log("Hello " + name)
    }
    return(
        <div className="home">
        <h1>Home Page</h1>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleNextClick("Justin")}>Click Again</button>
        </div>
    )
}

export default ClickEvents;