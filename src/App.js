import './App.css';
import Navbar from './components/navbar/Navbar';
import Pg6 from './components/pag6/Pg6';
import Pg1 from './components/page1/Pg1';
import Pg2 from './components/page2/Pg2';
import Pg3 from './components/page3/Pg3';
import Pg4 from './components/page4/Pg4';
import Pg5 from './components/page5/Pg5';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Pg1/>
      <Pg2/>
      <Pg3/>
      <Pg4/>
      <Pg5/>
      <Pg6/>
    </div>
  );
}

export default App;
