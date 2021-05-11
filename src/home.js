const Home = () => {
    const handleClick = () => {
        console.log('hey there!')
    }

    const handleClickAgain = (name) => {
        console.log('hey '+ name);
    }

    return ( 
        <div className="home">
            <h2>this is homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain('Mel')
            }}>Click Me Again</button>
        </div>
     );
}
 
export default Home;