
import './App.css';
import MynewComponent from './components/MyNewCompnent';

function App() {
  return (
    <div className="App">
      <MynewComponent firstName = {"juju"} lastName = {"mags"} age = {"23"} hairColor = {"black"} />
      <MynewComponent firstName = {"John"} lastName = {"Smith"} age = {"88"} hairColor = {"brown"} />
      <MynewComponent firstName = {"Millard"} lastName = {"Fillmore"} age = {"50"} hairColor = {"brown"} />
      <MynewComponent firstName = {"Maria"} lastName = {"Smith"} age = {"62"} hairColor = {"brown"} />
    </div>
  );
}

export default App;
