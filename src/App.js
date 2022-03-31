import './App.css';
import Useeffect from './components/Useeffect';
import Usestates from './components/Usestate';
import UseMemo from './components/UseMemo';
const  App = () => {
  return (
    <>
    <div className="App">
      <Usestates/>
      <Useeffect/>
      <UseMemo/>
    </div>
    </>
  );
}

export default App;
