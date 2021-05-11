import { useState } from 'react'

const Home = () => {
    // let name = 'Mel';

    const [name, setName] = useState('Mel');
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('John');
        setAge(26)
        console.log(name, age)
    }

    return ( 
        <div className="home">
            <h2>this is homepage</h2>
            <p>{ name } is { age } years young</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;