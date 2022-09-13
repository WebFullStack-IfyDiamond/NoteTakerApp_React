
import { useState } from "react";

const UsingState = () => {
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(21);

    const handleClick = () => {
        setName('Kendal');
        setAge(32);
    }

    return(
        <div className="home">
            <h1>About Page</h1>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Me</button>
        </div>

    )
}

export default UsingState;