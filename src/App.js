import './App.css';
import Useeffect from './components/Useeffect';
import Usestates from './components/Usestate';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseReducer from './components/UseReducer';
import UseLayouteffext from './components/UseLayouteffext';
import UseCallbackhook from './components/UseCallback';
const  App = () => {
  return (
    <>
    <div className="App">
      <Usestates/>
      <Useeffect/>
      <UseMemo/>
      <UseRef/>
      <UseReducer/>
      <UseLayouteffext/>
      <UseCallbackhook/>
    </div>
    </>
  );
}

export default App;
