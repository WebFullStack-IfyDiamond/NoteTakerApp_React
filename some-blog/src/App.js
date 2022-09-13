import Navbar from './Navbar';
import Home from './Home';
// import ClickEvents from './SimpleExamples/ClickEvents';
import UsingState from './SimpleExamples/UsingState';


function App() {
  
  return (
    <div className="App">
      <Navbar/>

      <div className="content">
        <Home />
        
      </div>
    </div>
  );
}

export default App;

// Notes:
// We can't output objects in curly braces
// App.js is the root component