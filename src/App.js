import './App.css';
import Header from './Header';
import Products from './Products';
function dosomething(data)
{
  console.log("I am clicked "+data);
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <button className='btn' onClick={()=>{
        dosomething("Rama")
      }}>Click</button>
    </div>
  );
}

export default App;
