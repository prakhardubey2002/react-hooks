import './App.css';
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from "./Action/index"
const  App = () => {
  const myState =useSelector((state) => state.changeTheNumber );
  const dispatch = useDispatch(); 
  return (
    <>
    <div className="App">
    
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>
      <div className="quantity">
        <a onClick={ () => dispatch(decNumber()) } className='quantity-minus' title='Decrement' >
          <span>-</span>
        </a>
        <input name='quantity' type="text" className='quantity_input' value={myState} />
        <a onClick={ () => dispatch(incNumber()) } className='quantity_plus' title='increment'>
          <span>+</span>
        </a>
      </div>
    </div>
    </>
  );
}

export default App;
