import Navbar from './Navbar';
import Home from './Home';

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