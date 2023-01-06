import logo from './logo.svg';
import './App.css';
import { UpperSection } from './section/upperSection';
import Footer from './section/Footer';

function App() {
  return (
    <div className="App">
      <UpperSection/>
      {/* <Footer/> */}
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
