import './App.css';
import Useeffect from './components/Useeffect';
import Usestates from './components/Usestate';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
const  App = () => {
  return (
    <>
    <div className="App">
      <Usestates/>
      <Useeffect/>
      <UseMemo/>
      <UseRef/>
    </div>
    </>
  );
}

export default App;
