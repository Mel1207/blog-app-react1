import './App.css';

function App() {
  const title = 'Elcome to the new blog'
  const likes = 50;
  const link = "https://www.google.com/"


  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{ 10 }</p>
        <p>{ "Hey mel"}</p>
        <p>{ [1, 2, 3, 4, 5] }</p>
        <p>{ Math.random() * 20 }</p>

        <a href={ link } target="blank">Google site</a>
      </div>
    </div>
  );
}

export default App;
