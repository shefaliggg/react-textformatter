import './App.css';
import Navbar from './components/Navbar';
import Privacy from './components/Privacy';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Formatter" about="Privacy"/>
      <div className="container">
        <TextForm heading="Text Formatter" />
      </div>
      <Privacy/>
    </>
  );
}

export default App;
