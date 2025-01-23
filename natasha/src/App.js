import'./App.css';

function App() {

  // Button for getting journey info
  const handleClick = () => {
    alert("Just use Google Maps lol")
    window.location.href = 'https://www.google.com/maps';
  };

  return (
    <div className="App">
      <h1>Journey Planner</h1>

      <button className="button" onClick={handleClick}>Click here to start</button>
    </div>
  
  );
}

export default App;
